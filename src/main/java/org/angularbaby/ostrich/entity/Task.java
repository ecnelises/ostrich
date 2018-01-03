package org.angularbaby.ostrich.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "tasks")
@Data
public class Task {

    public Task() {
        this.done = false;
        this.content = "";
        this.createdAt = new Date();
    }

    public Task(String content, TaskGroup group, User creator) {
        this.done = false;
        this.content = content;
        this.createdAt = new Date();
        this.taskGroup = group;
        this.creator = creator;
    }

    public void addDependency(Task task) {
        this.dependencies.add(task);
    }

    public boolean isReady() {
        return this.dependencies.stream().allMatch(task -> task.done);
    }

    public boolean isDone() {
        return this.done;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Boolean done;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Date createdAt;

    @ManyToMany
    @JoinTable(name = "task_dependencies",
        joinColumns = @JoinColumn(name = "dependency_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "task_id", referencedColumnName = "id")
    )
    private Set<Task> dependencies;

    @ManyToOne
    @JoinColumn(name = "task_group_id")
    private TaskGroup taskGroup;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User creator;

}
