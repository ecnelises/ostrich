package org.angularbaby.ostrich.request;

import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String password;
    private String nickname;
}
