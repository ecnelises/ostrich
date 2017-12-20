package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
