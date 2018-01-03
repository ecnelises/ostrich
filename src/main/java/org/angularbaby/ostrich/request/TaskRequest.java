package org.angularbaby.ostrich.request;

import lombok.Data;

@Data
public class TaskRequest {
    private String content;
    private Long taskGroupId;
}
