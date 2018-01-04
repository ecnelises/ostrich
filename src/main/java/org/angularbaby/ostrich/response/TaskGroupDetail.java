package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.TaskGroup;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TaskGroupDetail {
    private String title;
    private List<Long> taskIds;

    public TaskGroupDetail(TaskGroup group) {
        // TODO: Prevent N+1 query
        this.title = group.getName();
        this.taskIds = group.getTasks().stream().map(task -> task.getId()).collect(Collectors.toList());
    }
}
