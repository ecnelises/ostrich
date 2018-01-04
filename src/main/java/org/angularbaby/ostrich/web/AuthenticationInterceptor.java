package org.angularbaby.ostrich.web;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.config.JwtConfig;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.Map;

// JSON Web Tokens is used to authorize user identity.
// This interceptor checks if a requested method needs auth.
// If so, decode the JWT token and extract user id.
@Component
public class AuthenticationInterceptor extends HandlerInterceptorAdapter {
    // This method handles context before handled.
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        // Check whether method has the annotation for authentication.
        HandlerMethod handlerMethod = (HandlerMethod)handler;
        Method method = handlerMethod.getMethod();
        if (method.getAnnotation(NeedsAuthentication.class) != null) {
            boolean result = authorize(request);
            if (!result) {
                response.sendError(HttpServletResponse.SC_FORBIDDEN);
            }
            return result;
        }
        return super.preHandle(request, response, handler);
    }

    // Check JWT Token using its protocol.
    private boolean authorize(HttpServletRequest request) {
        String authString = request.getHeader("Authorization");
        if (authString == null || !authString.startsWith("Bearer")) {
            return false;
        }
        try {
            // Decode JWT token.
            Algorithm algorithm = Algorithm.HMAC256(JwtConfig.getSecret());
            JWTVerifier verifier = JWT.require(algorithm).withIssuer("ostrich").build();
            String token = authString.substring("Bearer".length()).trim();
            System.out.println(token);
            DecodedJWT jwt = verifier.verify(token);
            String jsonPayload = new String(Base64.getDecoder().decode(jwt.getPayload()), StandardCharsets.UTF_8);

            // Parse JSON Payload.
            Map<String, Object> payload = JsonParserFactory.getJsonParser().parseMap(jsonPayload);
//            Date expire = new Date((long)payload.getOrDefault("exp", new Long(0)));
//            if (expire.before(new Date())) {
//                return false;
//            }
            request.setAttribute("current_user_id", Long.valueOf(String.valueOf(payload.get("user_id"))));
        } catch (UnsupportedEncodingException | JWTVerificationException exception) {
            return false;
        }
        return true;
    }
}
