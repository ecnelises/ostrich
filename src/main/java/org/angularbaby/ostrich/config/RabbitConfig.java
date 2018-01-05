package org.angularbaby.ostrich.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * RabbitMQ 消息队列配置类，邮件发送功能使用 mailing 队列
 */
@Configuration
public class RabbitConfig {
    @Bean
    public Queue mailingQueue() {
        return new Queue("mailing");
    }
}
