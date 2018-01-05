package org.angularbaby.ostrich.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 自定义异常，在控制器类抛出此异常可以返回 403 Forbidden
 */
@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Authorize failed.")
public class AuthorizeFailedException extends RuntimeException {
}
