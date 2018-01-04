package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.Task;
import org.angularbaby.ostrich.entity.TaskGroup;
import org.angularbaby.ostrich.request.TaskRequest;
import org.angularbaby.ostrich.response.TaskResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/task-groups")
public class TaskGroupsController extends ApplicationBaseController {

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/tasks", method = RequestMethod.GET)
    public List<TaskResponse> listTasks(@PathVariable("id") Long id) {
        return taskGroupsRepository.findOne(id).getTasks().stream()
                .map(task -> new TaskResponse(task)).collect(Collectors.toList());
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/tasks", method = RequestMethod.POST)
    public ResponseEntity<TaskResponse> addTask(@PathVariable("id") Long id, @RequestBody TaskRequest request) {
        TaskGroup group = taskGroupsRepository.findOne(id);
        Task task = new Task(request.getContent(), group, currentUser());
        tasksRepository.save(task);
        return new ResponseEntity<>(new TaskResponse(task), HttpStatus.CREATED);
    }

}
