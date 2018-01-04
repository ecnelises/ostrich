package org.angularbaby.ostrich.web;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.angularbaby.ostrich.config.JwtConfig;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.exception.AuthorizeFailedException;
import org.angularbaby.ostrich.exception.InternalException;
import org.angularbaby.ostrich.request.LoginRequest;
import org.angularbaby.ostrich.response.LoginResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class SessionsController extends ApplicationBaseController {

    // Respond to a login request and sign a key with expire at 1 day later.
    @RequestMapping(method = RequestMethod.POST)
    public LoginResponse login(@RequestBody LoginRequest request) {
        try {
            User user = usersRepository.findByEmail(request.getEmail());
            if (user == null || !user.matchPassword(request.getPassword())) {
                throw new AuthorizeFailedException();
            }
            user.setLastLoginAt(new Date());
            usersRepository.save(user);
            Algorithm algorithm = Algorithm.HMAC256(JwtConfig.getSecret());
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(new Date());
            calendar.add(Calendar.DATE, 1);
            String token = JWT.create().withIssuer("ostrich")
                    .withClaim("user_id", user.getId())
                    .withClaim("exp", calendar.getTime())
                    .sign(algorithm);
            return new LoginResponse(token, calendar.getTime(), user.getId(), user.getNickname());
        } catch (UnsupportedEncodingException exception) {
            throw new InternalException();
        }
    }

}
