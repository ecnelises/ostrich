package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Project;
import org.angularbaby.ostrich.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectsRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByMembers(User user);
}
