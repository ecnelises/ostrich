package org.angularbaby.ostrich.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "notifications")
@Data
public class Notification {

    public Long getId() {
        return id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getSenderNickname() {
        return senderNickname;
    }

    public void setSenderNickname(String senderNickname) {
        this.senderNickname = senderNickname;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User userId;

    @Column(nullable = false)
    private String senderNickname;

    public Notification(User userId, String senderNickname, String message) {
        this.userId = userId;
        this.senderNickname = senderNickname;
        this.message = message;
    }

    public Notification(){
        super();
    }
    @Column(nullable = false)
    private String message;

}
