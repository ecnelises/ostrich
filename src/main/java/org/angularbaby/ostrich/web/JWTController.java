package org.angularbaby.ostrich.web;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.HashMap;
import java.util.Map;

public class JWTController {

    public static String createToken(Long userId) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("alg", "HS256");
        map.put("typ", "JWT");
        String token = JWT.create()
                .withHeader(map)//header
                .withClaim("userId", userId)
                .sign(Algorithm.HMAC256("secret"));//加密
        return token;
    }

    public static void verifyToken(String token, String key) throws Exception{
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(key))
                .build();
        DecodedJWT jwt = verifier.verify(token);
        Map<String, Claim> claims = jwt.getClaims();
        System.out.println(claims.get("userId").asLong());
    }
}
