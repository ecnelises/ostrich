package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.User;
import org.json.JSONObject;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.*;

@RestController
@RequestMapping(value = "/api/chats", produces = MediaType.APPLICATION_JSON_VALUE)
public class ChatController extends ApplicationBaseController{

    @NeedsAuthentication
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(@RequestParam(name = "subjectId") Long id) {
        System.out.println(id);
        List<User> groupmates = projectsRepository.findOne(id).getMembers();

        JSONObject test = new JSONObject();

        for(Iterator<User> iterator = groupmates.iterator(); iterator.hasNext();){
            test.put("t", iterator.next());
        }
        return new JSONObject()
                .put("userId", currentUser().getId())
//                .put("groupmates", )
                .put("test", test.toString())
                .toString();
    }
}
