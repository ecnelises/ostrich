package org.angularbaby.ostrich.request;

import lombok.Data;

@Data
public class ProjectRequest {
    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    private String title;
    private String description;
}
