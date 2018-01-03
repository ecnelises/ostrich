package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
}
