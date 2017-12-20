package org.angularbaby.ostrich.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tasks")
public class Task
{

    public long getId() {
        return id;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public int getColumnId() {
        return columnId;
    }

    public void setColumnId(int columnId) {
        this.columnId = columnId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public String getAncestorIds() {
        return ancestorIds;
    }

    public void setAncestorIds(String ancestorIds) {
        this.ancestorIds = ancestorIds;
    }

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private int priority;

    @Column(nullable = false)
    private boolean isDone;

    @Column(nullable = false)
    private int columnId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Date updated;

    @Column(nullable = false)
    private String ancestorIds; //todo

    public Task(int columnId, String content) {
        this(false, 1, new Date(), columnId, content, "");
    }

    public Task(boolean isDone,int priority, Date updated,int columnId, String content, String ancestorIds) {
        this.isDone = isDone;
        this.priority = priority;
        this.updated = updated;
        this.ancestorIds = ancestorIds;
        this.columnId = columnId;
        this.content = content;
    }

    public String toJSON(){
        return "{" + "\"id\":\"" + this.getId() +
                "\", \"priority\":\"" + this.getPriority() +
                "\", \"isDone\":\"" + this.isDone() +
                "\", \"content\":\"" + this.getContent() +
                "\", \"columnId\":\"" + this.getColumnId() +
                "\", \"updated\":\"" + this.getUpdated() +
                "\", \"ancestorIds\":\"" + this.getAncestorIds() +
                "\"}";
    }
}
