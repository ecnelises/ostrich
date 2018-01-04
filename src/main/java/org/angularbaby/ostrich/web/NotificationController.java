package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.Notification;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.NotificationRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/notifications", produces = MediaType.APPLICATION_JSON_VALUE)
public class NotificationController extends ApplicationBaseController{

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);

        User userId = currentUser();
        User sender = currentUser();
//        String message = (String)object.get("message");
        String message = "hello";

        try {
            Notification notification = new Notification(userId, sender, message);
            notificationRepository.save(notification);
        } catch (Exception e){

        }
        return "";
    }

    @NeedsAuthentication
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        try {
            System.out.println(currentUser());
            List<Notification> notificationList = notificationRepository.findAllByUserId(currentUser());
            return new JSONObject()
                    .put("notifications", notificationList)
                    .toString();
        } catch (Exception e){
            System.out.println(e);
            return new JSONObject()
                    .put("error", "error")
                    .toString();
        }
    }

    @Autowired
    private NotificationRepository notificationRepository;

}
