package org.angularbaby.ostrich.request;

import lombok.Data;
import org.angularbaby.ostrich.entity.User;

@Data
public class ChangeProfileRequest {
    private User.Gender gender;
    private String nickname;
    private String description;
    private String address;
    private String contact;
}
