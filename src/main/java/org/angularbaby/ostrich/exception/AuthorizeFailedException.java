package org.angularbaby.ostrich.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Authorize failed.")
public class AuthorizeFailedException extends RuntimeException {
}
