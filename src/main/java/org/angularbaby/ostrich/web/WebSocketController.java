package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.ChatMessage;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.ChatMessageRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import java.lang.reflect.Array;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Controller
public class WebSocketController extends ApplicationBaseController{

    @MessageMapping("/toOneMessage")
    public void sendToUserMessage(@Payload String chatMessage) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(chatMessage);
        // 存储

        Long sender = Long.valueOf((String) object.get("senderId"));
        String content = (String)object.get("content");
        Long receiver = Long.valueOf((String) object.get("receiver"));

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:sss'Z'");
        Date sendTime = new Date();
        try {
            sendTime = format.parse((String) object.get("sendTime"));
        }
        catch (Exception e){

        }

        template.convertAndSendToUser(receiver.toString(), "/message", chatMessage);
        template.convertAndSendToUser(sender.toString(), "/message", chatMessage);
    }

    @MessageMapping("/toAllMessage")
    public void sendToAllMessage(@Payload String chatMessage) {

        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(chatMessage);

        Long sender = Long.valueOf((String) object.get("senderId"));
        Long subjectId = Long.valueOf((String) object.get("subjectId"));
        String content = (String)object.get("content");

        System.out.println(subjectId);

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:sss'Z'");
        Date sendTime = new Date();

        try {
            sendTime = format.parse((String) object.get("sendTime"));
        }
        catch (Exception e){

        }

        List<User> groupmates = projectsRepository.findOne(subjectId).getMembers().stream().collect(Collectors.toList());
        List<Long> longs = new ArrayList<Long>();
        for (Iterator<User> iterator = groupmates.iterator(); iterator.hasNext();){
            User tmpUser = iterator.next();
            template.convertAndSendToUser(tmpUser.getId().toString(), "/message", chatMessage);
        }
    }

    @MessageMapping("/notification")
    public String sendToUserNotification(@Payload String notification) {

        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(notification);

        Long senderId = Long.valueOf((String) object.get("senderId"));
        Long subjectId = Long.valueOf((String) object.get("subjectId"));

        List<User> groupmates = projectsRepository.findOne(subjectId).getMembers().stream().collect(Collectors.toList());
        List<Long> longs = new ArrayList<Long>();
        for (Iterator<User> iterator = groupmates.iterator(); iterator.hasNext();) {
            User tmpUser = iterator.next();
            if (tmpUser.getId() != senderId) {
                template.convertAndSendToUser(tmpUser.getId().toString(), "/notification", notification);
            }
        }
        return "";
    }

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    private final SimpMessagingTemplate template;

    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }

}

