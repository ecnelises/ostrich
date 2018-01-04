package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.TaskGroup;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TaskGroupDetail {
    private Long id;
    private String title;
    private List<TaskResponse> tasks;

    public TaskGroupDetail(TaskGroup group) {
        // TODO: Prevent N+1 query
        this.id = group.getId();
        this.title = group.getName();
        this.tasks = group.getTasks().stream().map(task -> new TaskResponse(task)).collect(Collectors.toList());
    }
}
