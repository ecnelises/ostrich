package org.angularbaby.ostrich.entity;

import org.mindrot.jbcrypt.BCrypt;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users")
public class User {
    public User(){
        super();
    }

    public User(String email, String password, String nickname) {
        this.email = email;
        this.digestedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        this.nickname = nickname;
        this.registeredAt = new Date();
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    public String getNickname() {
        return nickname;
    }

    public String getDescription() {
        return description;
    }

    public String getAddress() {
        return address;
    }

    public String getContact() {
        return contact;
    }

    public Date getRegisteredAt() {
        return registeredAt;
    }

    public Date getLastLoginAt() {
        return lastLoginAt;
    }

    public void digestPassword(String plainPassword) {
        this.digestedPassword = BCrypt.hashpw(plainPassword, BCrypt.gensalt());
    }

    public boolean matchPassword(String plainPassword) {
        return BCrypt.checkpw(plainPassword, this.digestedPassword);
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setLastLoginAt(Date lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
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

    private Date lastLoginAt;

    public enum Gender {
        MALE, FEMALE, UNKNOWN
    }
}
