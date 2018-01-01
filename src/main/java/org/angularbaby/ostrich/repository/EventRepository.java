package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {


}
