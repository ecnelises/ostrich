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

    private Date lastLoginAt;

    @ManyToMany(mappedBy = "members")
    private Set<Project> projects;

    public enum Gender {
        MALE, FEMALE, UNKNOWN
    }

}
