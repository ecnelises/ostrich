package org.angularbaby.ostrich.config;

/**
 * JSON Web Token 的密钥，可以用环境变量更新
 */
public class JwtConfig {
    public static String getSecret() {
        String secret = System.getenv("JWT_AUTH_SECRET");
        final String defaultSecret =
            "45299e9f30935477c1638dfafde73f537199be936147c34f47b5cfada2646172"
            + "f380902e9a1f19c670a13bfc0357a27f8afd15f23c682090174aab7276fa170c";
        if (secret == null) {
            return defaultSecret;
        } else {
            return secret;
        }
    }
}
