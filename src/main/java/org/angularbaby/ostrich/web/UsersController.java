package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.UserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsersController {
    @RequestMapping(method = RequestMethod.POST)
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
        } catch (DataIntegrityViolationException exception) {
            return new JSONObject()
                    .put("status", "bad_request")
                    .put("error", exception.getMessage())
                    .toString();
        }
    }

    @Autowired
    private UserRepository userRepository;
}
