package org.angularbaby.ostrich.config;

public class JwtConfig {
    public static String getSecret() {
        String secret = System.getenv("JWT_AUTH_SECRET");
        final String defaultSecret = "akapela";
        if (secret == null) {
            return defaultSecret;
        } else {
            return secret;
        }
    }
}
