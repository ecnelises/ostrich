package org.angularbaby.ostrich.request;

import lombok.Data;
import org.angularbaby.ostrich.entity.User;

@Data
public class ChangeProfileRequest {
    private User.Gender gender;

    public User.Gender getGender() {
        return gender;
    }

    public void setGender(User.Gender gender) {
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

    private String nickname;
    private String description;
    private String address;
    private String contact;
}
