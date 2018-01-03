package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskGroupsRepository extends JpaRepository<TaskGroup, Long> {
}
