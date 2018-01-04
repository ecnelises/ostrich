package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.request.ChangeProfileRequest;
import org.angularbaby.ostrich.request.RegisterRequest;
import org.angularbaby.ostrich.response.ChangeProfileResponse;
import org.angularbaby.ostrich.response.RegisterResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UsersController extends ApplicationBaseController {

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        User user = new User(request.getEmail(), request.getPassword(), request.getNickname());
        usersRepository.save(user);
        return new ResponseEntity<>(new RegisterResponse(user.getEmail()), HttpStatus.CREATED);
    }

    @NeedsAuthentication
    @RequestMapping(method = RequestMethod.PUT, path = "/profile")
    public ChangeProfileResponse changeProfile(@RequestBody ChangeProfileRequest request) {
        User user = currentUser();
        if (request.getAddress() != null) {
            user.setAddress(request.getAddress());
        }
        if (request.getContact() != null) {
            user.setContact(request.getAddress());
        }
        if (request.getDescription() != null) {
            user.setDescription(request.getDescription());
        }
        if (request.getGender() != null) {
            user.setGender(request.getGender());
        }
        if (request.getNickname() != null) {
            user.setNickname(request.getNickname());
        }
        usersRepository.save(user);
        return new ChangeProfileResponse(user.getEmail(), user.getGender(),
                user.getNickname(), user.getDescription(), user.getAddress(),
                user.getContact(), user.getLastLoginAt(), user.getRegisteredAt());
    }

}
