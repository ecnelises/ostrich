package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.ProjectsRepository;
import org.angularbaby.ostrich.repository.TaskGroupsRepository;
import org.angularbaby.ostrich.repository.TasksRepository;
import org.angularbaby.ostrich.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Component
public class ApplicationBaseController {
    @Autowired
    protected UsersRepository usersRepository;

    @Autowired
    protected TasksRepository tasksRepository;

    @Autowired
    protected TaskGroupsRepository taskGroupsRepository;

    @Autowired
    protected ProjectsRepository projectsRepository;

    @Autowired
    protected HttpServletRequest context;

    User currentUser() {
        if (this.user != null) {
            return this.user;
        }
        Long currentUserId = (Long) context.getAttribute("current_user_id");
        if (currentUserId == null) {
            return null;
        } else {
            this.user = usersRepository.findOne(currentUserId);
            return this.user;
        }
    }

    private User user;
}
