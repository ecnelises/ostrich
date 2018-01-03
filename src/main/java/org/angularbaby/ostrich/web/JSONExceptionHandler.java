package org.angularbaby.ostrich.web;

import org.json.JSONException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class JSONExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(JSONException.class)
    protected ResponseEntity<ApiError> handleJSONException(JSONException exception) {
        return new ResponseEntity<>(
                new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage()),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
