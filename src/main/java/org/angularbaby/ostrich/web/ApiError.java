package org.angularbaby.ostrich.web;

import org.springframework.http.HttpStatus;

import java.util.Date;

/**
 * 自定义 Api 错误数据结构，用以在 ControllerAdvice 中返回
 */
public class ApiError {
    private HttpStatus status;
    private Date timestamp;
    private String content;

    ApiError(HttpStatus status, String message) {
        this.timestamp = new Date();
        this.status = status;
        this.content = message;
    }
}
