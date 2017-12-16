package myapp.repository;

import myapp.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;

public interface TasksRepository extends JpaRepository<Task, Long> {

    @Query("select t from Task t where t.id = :taskName")
    Task findByTaskName(@Param("taskName")Long id);

}
