package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.Project;
import org.angularbaby.ostrich.entity.TaskGroup;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.exception.AuthorizeFailedException;
import org.angularbaby.ostrich.request.CreateTaskGroupRequest;
import org.angularbaby.ostrich.request.ProjectRequest;
import org.angularbaby.ostrich.response.ProjectDetail;
import org.angularbaby.ostrich.response.TaskGroupDetail;
import org.angularbaby.ostrich.response.UserDetail;
import org.angularbaby.ostrich.service.MailingMessageSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/projects")
public class ProjectsController extends ApplicationBaseController {

    @NeedsAuthentication
    @RequestMapping(method = RequestMethod.GET)
    public List<ProjectDetail> listMyProjects() {
        List<Project> projects = projectsRepository.findByMembers(currentUser());
        return projects.stream().map(project -> new ProjectDetail(project)).collect(Collectors.toList());
    }

    @NeedsAuthentication
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<ProjectDetail> createNewProject(@RequestBody ProjectRequest request) {
        Project project = new Project(request.getTitle(), request.getDescription());
        project.setCreator(currentUser());
        projectsRepository.save(project);
        project.getMembers().add(currentUser());
        projectsRepository.save(project);
        return new ResponseEntity<>(new ProjectDetail(project), HttpStatus.CREATED);
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/join", method = RequestMethod.PUT)
    public String joinProject(@PathVariable("id") Long id) {
        Project project = projectsRepository.findOne(id);

        // If there is an invitation
        String expectedKey = String.format("invproj-%d-%d", id, currentUser().getId());
        if (redisTemplate.opsForValue().get(expectedKey) != null) {
            // Here we cannot use contains method because of lazy initialization of association.
            if (project.getMembers().stream().noneMatch(
                    member -> member.getId().equals(currentUser().getId()))) {
                project.getMembers().add(currentUser());
                projectsRepository.save(project);
            }
            redisTemplate.delete(expectedKey);
        } else {
            throw new AuthorizeFailedException();
        }
        return "";
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/leave", method = RequestMethod.PUT)
    public String leaveProject(@PathVariable("id") Long id) {
        Project project = projectsRepository.findOne(id);
        project.setMembers(project.getMembers().stream().filter(
                member -> !member.getId().equals(currentUser().getId())).collect(Collectors.toList()));
        projectsRepository.save(project);
        return "";
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/invite", method = RequestMethod.POST)
    public ResponseEntity<String> invitePeople(@PathVariable("id") Long id, @RequestBody List<String> emails) {
        Project project = projectsRepository.findOne(id);
        List<User> members = project.getMembers().stream().collect(Collectors.toList());
        List<User> users = usersRepository.findUsersByEmail(emails);
        users.stream().filter(user -> !members.contains(user)).forEach(user -> {
            final String expectedKey = String.format("invproj-%d-%d", id, user.getId());
            mailSender.sendInvitation(project, user.getEmail());
            redisTemplate.opsForValue().set(expectedKey, "1");
        });
        return new ResponseEntity<>("", HttpStatus.CREATED);
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ProjectDetail getProjectInformation(@PathVariable("id") Long id) {
        return new ProjectDetail(projectsRepository.findOne(id));
    }

    @NeedsAuthentication
    @RequestMapping(value = "/{id}/members", method = RequestMethod.GET)
    public List<UserDetail> listMembers(@PathVariable("id") Long id) {
        return projectsRepository.findOne(id).getMembers().stream().map(member -> new UserDetail(member)).collect(Collectors.toList());
    }

    @NeedsAuthentication
    @RequestMapping(value = "{id}/groups", method = RequestMethod.GET)
    public List<TaskGroupDetail> listTaskGroups(@PathVariable("id") Long id) {
        // TODO: Authenticate if current user belongs to the project.
        return projectsRepository.findOne(id).getTaskGroups().stream()
                .map(group -> new TaskGroupDetail(group)).collect(Collectors.toList());
    }

    @NeedsAuthentication
    @RequestMapping(value = "{id}/groups", method = RequestMethod.POST)
    public ResponseEntity<TaskGroupDetail> addNewGroup(@PathVariable("id") Long id, @RequestBody CreateTaskGroupRequest request) {
        Project project = projectsRepository.findOne(id);
        TaskGroup group = new TaskGroup(request.getName(), project);
        taskGroupsRepository.save(group);
        return new ResponseEntity<>(new TaskGroupDetail(group), HttpStatus.CREATED);
    }

    @Autowired
    private MailingMessageSender mailSender;

}
