package org.angularbaby.ostrich.entity;

import javax.persistence.*;

@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Long belongTo;

    @Column(nullable = false)
    private String title;
}
