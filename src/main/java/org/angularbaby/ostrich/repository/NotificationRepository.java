package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Notification;
import org.angularbaby.ostrich.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findAllByUserId(User userId);

}
