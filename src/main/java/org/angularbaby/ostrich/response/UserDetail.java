package org.angularbaby.ostrich.response;

import lombok.Data;
import org.angularbaby.ostrich.entity.User;

@Data
public class UserDetail {
    private String email;
    private String nickname;

    public UserDetail(User user) {
        this.email = user.getEmail();
        this.nickname = user.getNickname();
    }
}
