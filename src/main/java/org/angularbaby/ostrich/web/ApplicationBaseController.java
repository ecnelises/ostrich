package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.ProjectsRepository;
import org.angularbaby.ostrich.repository.TaskGroupsRepository;
import org.angularbaby.ostrich.repository.TasksRepository;
import org.angularbaby.ostrich.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.session.SessionProperties;
import org.springframework.data.redis.core.RedisKeyValueTemplate;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
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

    @Autowired
    protected StringRedisTemplate redisTemplate;

    User currentUser() {
        Long currentUserId = (Long) context.getAttribute("current_user_id");
        if (currentUserId == null) {
            return null;
        } else {
            return usersRepository.findOne(currentUserId);
        }
    }
}
