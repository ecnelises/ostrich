package org.angularbaby.ostrich.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "task_groups")
public class TaskGroup {

    public TaskGroup(String name, Project project) {
        this.name = name;
        this.tasks = new ArrayList<>();
        this.createdAt = new Date();
        this.project = project;
    }

    public void addTask(Task task) {
        this.tasks.add(task);
    }

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(mappedBy = "taskGroup", cascade = CascadeType.ALL)
    private List<Task> tasks;

    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;
}
