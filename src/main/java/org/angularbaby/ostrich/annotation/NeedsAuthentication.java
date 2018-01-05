package org.angularbaby.ostrich.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 针对控制器方法的注解
 * 如果一个控制器方法带有此注解，表明其需要基于 JWT 的用户身份验证操作
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface NeedsAuthentication {
}
