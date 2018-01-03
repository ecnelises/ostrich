package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.entity.Notification;
import org.angularbaby.ostrich.repository.NotificationRepository;
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
public class NotificationController {
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);

        Long userId = new Long(1);
        Long sender = new Long((int) object.get("sender"));
        String message = (String)object.get("message");

        try {
            Notification notification = new Notification(userId, sender, message);
            notificationRepository.save(notification);
        } catch (Exception e){

        }
        return "";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        try {
            List<Notification> notificationList = notificationRepository.findAll();
        } catch (Exception e){

        }
        return "";
    }

    @Autowired
    private NotificationRepository notificationRepository;

}
