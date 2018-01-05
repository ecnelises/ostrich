package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.User;
import org.json.JSONObject;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/chats", produces = MediaType.APPLICATION_JSON_VALUE)
public class ChatController extends ApplicationBaseController{

    @NeedsAuthentication
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(@RequestParam(name = "subjectId") Long id) {

        List<User> groupmates = projectsRepository.findOne(id).getMembers().stream().collect(Collectors.toList());
        List<Long> longs = new ArrayList<Long>();
        List<String> strings = new ArrayList<String>();
        for (Iterator<User> iterator = groupmates.iterator(); iterator.hasNext();){
            User tmpUser = iterator.next();
            if (tmpUser != currentUser()) {
                longs.add(tmpUser.getId());
                strings.add(tmpUser.getNickname());
            }
        }

        return new JSONObject()
                .put("userId", currentUser().getId())
                .put("groupIds", longs)
                .put("groupNicknames", strings)
                .toString();
    }
}
