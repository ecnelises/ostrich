package org.angularbaby.ostrich.entity;

import javax.persistence.*;
import javax.security.auth.callback.CallbackHandler;
import java.util.Date;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getSender() {
        return sender;
    }

    public void setSender(Long sender) {
        this.sender = sender;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public ChatMessage(){
        super();
    }

    public ChatMessage(String content, Long sender, Date sendTime){
        this.content = content;
        this.sender = sender;
        this.sendTime = sendTime;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String content;

    @OneToOne(cascade = CascadeType.ALL, targetEntity = User.class)
    private Long sender;

    @Column(nullable = false)
    private Date sendTime;
}
