package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.Task;

import java.util.Date;

@Data
public class TaskResponse {
    private Long id;
    private String content;
    private Long creatorId;
    private Long groupId;
    private Boolean done;
    private Date createdAt;

    public TaskResponse(Long id, String content, Long creatorId,
                        Long groupId, Boolean done, Date createdAt) {
        this.id = id;
        this.content = content;
        this.creatorId = creatorId;
        this.groupId = groupId;
        this.done = done;
        this.createdAt = createdAt;
    }

    public TaskResponse(Task task) {
        this.id = task.getId();
        this.content = task.getContent();
        this.creatorId = task.getCreator().getId();
        this.groupId = task.getTaskGroup().getId();
        this.done = task.isDone();
        this.createdAt = task.getCreatedAt();
    }
}
