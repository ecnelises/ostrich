package org.angularbaby.ostrich.response;

import lombok.Data;

import java.util.Date;

@Data
public class LoginResponse {
    private String token;
    private Date expire;

    public LoginResponse(String token, Date expire) {
        this.token = token;
        this.expire = expire;
    }
}
