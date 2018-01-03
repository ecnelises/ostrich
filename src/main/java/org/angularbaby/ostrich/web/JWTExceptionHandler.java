package org.angularbaby.ostrich.web;

import com.auth0.jwt.exceptions.JWTCreationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class JWTExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(JWTCreationException.class)
    protected ResponseEntity<ApiError> handleJWTCreationException(JWTCreationException exception) {
        return new ResponseEntity<>(
                new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage()),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
