package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.UserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsersController {
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);
        String email = (String)object.get("email");
        String password = (String)object.get("password");
        String nickname = (String)object.get("nickname");
        try {
            User user = new User(email, password, nickname);
            userRepository.save(user);
            return new JSONObject()
                    .put("status", "ok")
                    .put("email", user.getEmail())
                    .toString();
        } catch (Exception exception) {
            return "{\"status\":\"internal_error\"}";
        }
    }

   /* @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);
        String email = (String)object.get("email");
        String password = (String)object.get("password");
        try {
            System.out.println(email);
            User user = userRepository.findByEmail(email);
            if (user.matchPassword(password)){
                try {
                    String jwt = JWTController.createToken(user.getId());
                    return new JSONObject()
                            .put("login_state", "ok")
                            .put("jwt", jwt)
                            .toString();
                } catch (Exception e) {
                    return "{\"status\":\"internal_error\"}";
                }
            }
            else {
                return new JSONObject()
                        .put("login_state", "error")
                        .put("error_message", "password is not correct")
                        .toString();
            }
        } catch (Exception exception) {
            return "{\"status\":\"internal_error\"}";
        }
    }*/

    @Autowired
    private UserRepository userRepository;
}
