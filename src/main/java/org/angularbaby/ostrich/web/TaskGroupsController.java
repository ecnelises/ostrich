package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.response.TaskResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/task-groups")
public class TaskGroupsController extends ApplicationBaseController {

    @RequestMapping(value = "/{id}/tasks", method = RequestMethod.GET)
    public List<TaskResponse> listTasks(@PathVariable("id") Long id) {
        return taskGroupsRepository.findOne(id).getTasks().stream()
                .map(task -> new TaskResponse(task)).collect(Collectors.toList());
    }

}
