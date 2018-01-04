package org.angularbaby.ostrich.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "projects")
@Data
public class Project {
    public Project(String title, String description) {
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
        this.members = new ArrayList<>();
    }

    public Project() {
        this.createdAt = new Date();
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "users_projects",
            joinColumns = @JoinColumn(name = "project_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private List<User> members;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "project")
    private List<TaskGroup> taskGroups;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creator;

    private Date createdAt;
}
