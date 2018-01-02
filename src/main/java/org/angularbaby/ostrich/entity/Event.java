package org.angularbaby.ostrich.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "events")
public class Event
{

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Date getRemindTime() {
        return remindTime;
    }

    public void setRemindTime(Date remindTime) {
        this.remindTime = remindTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Date startTime;

    @Column(nullable = false)
    private Date endTime;

    @Column(nullable = true)
    private Date remindTime;

    public Event(Long userId, Date startTime, Date endTime, Date remindTime, String title, String content) {
        this.userId = userId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.remindTime = remindTime;
        this.title = title;
        this.content = content;
    }

    public Event(){
        super();
    }

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;
}
