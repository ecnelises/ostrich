package org.angularbaby.ostrich.request;

import lombok.Data;

@Data
public class TaskRequest {
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getTaskGroupId() {
        return taskGroupId;
    }

    public void setTaskGroupId(Long taskGroupId) {
        this.taskGroupId = taskGroupId;
    }

    private String content;
    private Long taskGroupId;
}
