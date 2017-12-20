package myapp.repository;

import myapp.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SubjectsRepository extends JpaRepository<Subject, Long> {

}
