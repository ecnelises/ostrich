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

    private String content;
}
