package org.angularbaby.ostrich.web;

import org.springframework.http.HttpStatus;

import java.util.Date;

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
