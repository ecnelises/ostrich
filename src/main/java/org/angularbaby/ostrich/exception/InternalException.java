package org.angularbaby.ostrich.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 自定义异常，在控制器内抛出此异常能够返回 500 错误码
 */
@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Internal server error.")
public class InternalException extends RuntimeException {
}
