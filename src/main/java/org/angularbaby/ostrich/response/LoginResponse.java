package org.angularbaby.ostrich.response;

import lombok.Data;

import java.util.Date;

@Data
public class LoginResponse {
    private String token;
    private Date expire;
    private Long userId;
    private String nickname;

    public LoginResponse(String token, Date expire, Long userId, String nickname) {
        this.token = token;
        this.expire = expire;
        this.userId = userId;
        this.nickname = nickname;
    }
}
