package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.Project;
import org.angularbaby.ostrich.entity.Task;
import org.angularbaby.ostrich.entity.TaskGroup;
import org.angularbaby.ostrich.exception.AuthorizeFailedException;
import org.angularbaby.ostrich.request.TaskRequest;
import org.angularbaby.ostrich.request.ToggleTaskRequest;
import org.angularbaby.ostrich.response.TaskResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TasksController extends ApplicationBaseController {

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public String deleteTask(@PathVariable("id") Long id) {
        Task task = tasksRepository.findOne(id);
        Project project = task.getTaskGroup().getProject();
        if (!project.getMembers().contains(currentUser())) {
            throw new AuthorizeFailedException();
        }
        tasksRepository.delete(task);
        return "";
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}/toggle")
    public TaskResponse toggleTask(@PathVariable("id") Long id, @RequestBody ToggleTaskRequest done) {
        Task task = tasksRepository.findOne(id);
        task.setDone(done.getStatus());
        tasksRepository.save(task);
        return new TaskResponse(task);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}/move")
    public TaskResponse moveTask(@PathVariable("id") Long id, @RequestBody Long groupId) {
        TaskGroup destGroup = taskGroupsRepository.findOne(groupId);
        Task task = tasksRepository.findOne(id);
        if (!task.getTaskGroup().getProject().getMembers().contains(currentUser()) ||
                !destGroup.getProject().getId().equals(task.getTaskGroup().getProject().getId())) {
            throw new AuthorizeFailedException();
        }
        task.setTaskGroup(destGroup);
        tasksRepository.save(task);
        return new TaskResponse(task);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public TaskResponse changeTask(@PathVariable("id") Long id, @RequestBody TaskRequest request) {
        Task task = tasksRepository.findOne(id);
        if (request.getContent() != null) {
            task.setContent(request.getContent());
        }
        tasksRepository.save(task);
        return new TaskResponse(task);
    }

}
