package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsRepository extends JpaRepository<Project, Long> {

}
