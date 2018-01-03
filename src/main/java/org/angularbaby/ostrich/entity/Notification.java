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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
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

    public Notification(Long userId, Long sender, String message){
        this.userId = userId;
        this.sender = sender;
        this.message = message;
    };


    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(cascade = CascadeType.ALL, targetEntity = User.class)
    private Long userId;

    public Long getSender() {
        return sender;
    }

    public void setSender(Long sender) {
        this.sender = sender;
    }

    @OneToOne(cascade = CascadeType.ALL, targetEntity = User.class)
    private Long sender;

    @Column(nullable = false)
    private String message;

}
