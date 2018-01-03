package org.angularbaby.ostrich.response;

import lombok.Data;

@Data
public class RegisterResponse {
    public RegisterResponse(String email) {
        this.email = email;
    }

    private String email;
}
