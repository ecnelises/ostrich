package org.angularbaby.ostrich.request;

import lombok.Data;

@Data
public class CreateTaskGroupRequest {
    public String getName() {
        return name;
    }

    private String name;
}
