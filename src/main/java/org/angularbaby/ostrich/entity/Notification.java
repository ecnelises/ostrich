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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Notification(){
        super();
    }

    public Notification(User userId, User sender, String message){
        this.userId = userId;
        this.sender = sender;
        this.message = message;
    };


    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User userId;

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    @ManyToOne
    @JoinColumn(name = "sender")
    private User sender;

    @Column(nullable = false)
    private String message;

}
