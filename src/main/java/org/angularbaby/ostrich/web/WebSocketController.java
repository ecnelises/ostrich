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

@Controller
public class WebSocketController extends ApplicationBaseController{

    @MessageMapping("/toOneMessage")
    public void sendToUserMessage(@Payload String chatMessage) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(chatMessage);
        // 存储

        Long sender = new Long((int)object.get("sender"));
        String content = (String)object.get("content");
        Long receiver = new Long((int)object.get("receiver"));

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

        Long sender = new Long((int)object.get("sender"));
        Long subjectId = new Long((int)object.get("subjectId"));
        String content = (String)object.get("content");

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:sss'Z'");
        Date sendTime = new Date();

        try {
            sendTime = format.parse((String) object.get("sendTime"));
        }
        catch (Exception e){

        }

        Set<User> users = projectsRepository.findOne(subjectId).getMembers();
        for(Iterator<User> iterator = users.iterator(); iterator.hasNext();){
            template.convertAndSendToUser(iterator.next().getId().toString(), "/message", chatMessage);
        }
    }

    @MessageMapping("/notification")
    public String sendToUserNotification(@Payload String notification) {

        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(notification);

        Long subjectId = new Long(2);

        Set<User> users = projectsRepository.findOne(subjectId).getMembers();
        for(Iterator<User> iterator = users.iterator(); iterator.hasNext();){
            template.convertAndSendToUser(iterator.next().getId().toString(), "/notification", notification);

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

