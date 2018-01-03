package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
