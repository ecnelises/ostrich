package org.angularbaby.ostrich.entity;

import lombok.Data;
import org.mindrot.jbcrypt.BCrypt;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {

    public User() {
        this.registeredAt = new Date();
    }

    public User(String email, String password, String nickname) {
        this.email = email;
        this.digestedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        this.nickname = nickname;
        this.registeredAt = new Date();
    }

    public void digestPassword(String plainPassword) {
        this.digestedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
    }

    public boolean matchPassword(String plainPassword) {
        return BCrypt.checkpw(plainPassword, this.digestedPassword);
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String digestedPassword;

    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    @Column(nullable =false)
    private String nickname;

    private String description;

    private String address;

    private String contact;

    private Date registeredAt;

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDigestedPassword() {
        return digestedPassword;
    }

    public void setDigestedPassword(String digestedPassword) {
        this.digestedPassword = digestedPassword;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Date getRegisteredAt() {
        return registeredAt;
    }

    public void setRegisteredAt(Date registeredAt) {
        this.registeredAt = registeredAt;
    }

    public Date getLastLoginAt() {
        return lastLoginAt;
    }

    public void setLastLoginAt(Date lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    private Date lastLoginAt;

    @ManyToMany(mappedBy = "members")
    private Set<Project> projects;

    public enum Gender {
        MALE, FEMALE, UNKNOWN
    }

}
