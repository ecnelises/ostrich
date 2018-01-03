package org.angularbaby.ostrich.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "subjects")
@Data
public class Project {
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
    private Set<User> members;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creator;

    private Date createdAt;
}
