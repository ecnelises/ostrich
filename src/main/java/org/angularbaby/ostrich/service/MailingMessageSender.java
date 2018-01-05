package org.angularbaby.ostrich.service;

import org.angularbaby.ostrich.entity.Project;
import org.angularbaby.ostrich.entity.User;
import org.json.JSONObject;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 邮件发送服务
 */
@Component
public class MailingMessageSender {
    @Autowired
    private AmqpTemplate rabbitTemplate;

    public void sendInvitation(Project project, String email, String domain) {
        String link = String.format("http://%s/join/%d", domain, project.getId());
        String content = new JSONObject()
                .put("type", "invitation")
                .put("address", email)
                .put("link", link)
                .toString();
        this.rabbitTemplate.convertAndSend("mailing", content);
    }

    public void sendConfirmation(User user, String email, String key, String domain) {
        String link = String.format("http://%s/confirm/%s", domain, key);
        String content = new JSONObject()
                .put("type", "confirmation")
                .put("address", email)
                .put("link", link)
                .toString();
        this.rabbitTemplate.convertAndSend("mailing", content);
    }
}
