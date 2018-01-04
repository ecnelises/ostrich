package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.Project;
import java.util.Date;

@Data
public class ProjectDetail {
    private Long id;
    private String title;
    private String description;
    private Long creatorId;
    private Date createdAt;

    public ProjectDetail(Project project) {
        this.id = project.getId();
        this.title = project.getTitle();
        this.description = project.getDescription();
        this.creatorId = project.getCreator().getId();
        this.createdAt = project.getCreatedAt();
    }
}
