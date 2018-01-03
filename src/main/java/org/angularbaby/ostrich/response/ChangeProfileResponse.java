package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.User;

import java.util.Date;

@Data
public class ChangeProfileResponse {
    private String email;
    private User.Gender gender;
    private String nickname;
    private String description;
    private String address;
    private String contact;
    private Date lastLoginAt;
    private Date registeredAt;

    public ChangeProfileResponse(String email, User.Gender gender,
                                 String nickname, String description,
                                 String address, String contact,
                                 Date lastLoginAt, Date registeredAt) {
        this.email = email;
        this.gender = gender;
        this.nickname = nickname;
        this.description = description;
        this.address = address;
        this.contact = contact;
        this.lastLoginAt = lastLoginAt;
        this.registeredAt = registeredAt;
    }
}
