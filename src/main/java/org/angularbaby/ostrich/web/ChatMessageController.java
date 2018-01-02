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
import org.springframework.stereotype.Controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Controller
public class ChatMessageController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public String sendMessage(@Payload String chatMessage) {
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

    @Autowired
    private ChatMessageRepository chatMessageRepository;

}

