package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findAllByUserId(Long userId);
}
