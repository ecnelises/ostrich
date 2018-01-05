package org.angularbaby.ostrich.request;

import lombok.Data;

/**
 * 对于含有 lombok.Data 注解的类，getter 和 setter 方法会自动生成，并非必需
 */
@Data
public class ToggleTaskRequest {
    private Boolean status;
}
