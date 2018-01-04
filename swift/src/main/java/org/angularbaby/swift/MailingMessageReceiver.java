package org.angularbaby.swift;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RabbitListener(queues = "mailing")
public class MailingMessageReceiver {
    @Autowired
    private JavaMailSender mailSender;

    @RabbitHandler
    public void process(String message) {
        Map<String, Object> result = JsonParserFactory.getJsonParser().parseMap(message);
        String type = (String)result.get("type");
        if (type.equals("invitation")) {
            String link = (String)result.get("link");
            String to = (String)result.get("address");
            SimpleMailMessage text = new SimpleMailMessage();
            text.setFrom("m18725942553@163.com");
            text.setTo(to);
            text.setSubject("邀请链接");
            text.setText(String.format("有人邀请您加入项目，请点击链接加入吧：%s", link));
            mailSender.send(text);
        } else if (type.equals("confirmation")) {
            String link = (String)result.get("link");
            String to = (String)result.get("address");
            SimpleMailMessage text = new SimpleMailMessage();
            text.setFrom("m18725942553@163.com");
            text.setTo(to);
            text.setSubject("确认在 Ostrich 注册");
            text.setText(String.format("请点击链接完成您在 Ostrich 的注册：%s", link));
            mailSender.send(text);
        }
    }
}
