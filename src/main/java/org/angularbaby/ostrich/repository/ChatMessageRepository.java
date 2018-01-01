package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

}