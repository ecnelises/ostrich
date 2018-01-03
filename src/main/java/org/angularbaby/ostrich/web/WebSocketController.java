package org.angularbaby.ostrich.web;

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
public class WebSocketController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public String sendToAllMessage(@Payload String chatMessage) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(chatMessage);
        // 存储
        Long sender = new Long((int)object.get("sender"));
        String content = (String)object.get("content");

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:sss'Z'");

        Date sendTime = new Date();

        try {
            sendTime = format.parse((String) object.get("sendTime"));
        }
        catch (Exception e){

        }

        return new JSONObject()
                .put("sender", sender.toString())
                .put("content", content)
                .put("sendTime", sendTime.toString())
                .toString();
    }

    @MessageMapping("/message")
    public String sendToUserMessage(@Payload String chatMessage) {

        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(chatMessage);
        // 存储

        Long sender = new Long((int)object.get("sender"));
        String content = (String)object.get("content");

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:sss'Z'");

        Date sendTime = new Date();

        try {
            sendTime = format.parse((String) object.get("sendTime"));
        }
        catch (Exception e){

        }
        System.out.println("message to user");
        template.convertAndSendToUser("2", "/message", chatMessage);

        return new JSONObject()
                .put("sender", sender.toString())
                .put("content", content)
                .put("sendTime", sendTime.toString())
                .toString();
    }

    @MessageMapping("/notification")
    public String sendToUserNotification(@Payload String notification) {

        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(notification);
        ArrayList<Integer> userGroup = (ArrayList<Integer>) object.get("userGroup");
        System.out.println(object.get("userGroup"));
        System.out.println("notice");

        for (int i = 0; i < userGroup.size(); i++){
            template.convertAndSendToUser(userGroup.get(i).toString(), "/notification", notification);
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

