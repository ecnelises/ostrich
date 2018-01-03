package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
}
