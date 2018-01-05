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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/notifications", produces = MediaType.APPLICATION_JSON_VALUE)
public class NotificationController extends ApplicationBaseController{

    @NeedsAuthentication
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);

        String senderNickname = (String)object.get("sender");
        String message = (String)object.get("message");

        try {
            Notification notification = new Notification(currentUser(), senderNickname, message);
            notificationRepository.save(notification);
        } catch (Exception e){

        }
        return "";
    }

    @NeedsAuthentication
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        try {
            List<Notification> notificationList = notificationRepository.findAllByUserId(currentUser());
            List<String> longs = new ArrayList<String>();
            List<String> strings = new ArrayList<String>();
            for (Iterator<Notification> iterator = notificationList.iterator(); iterator.hasNext();) {
                Notification tmp = iterator.next();
                longs.add(tmp.getSenderNickname());
                strings.add(tmp.getMessage());
            }
            return new JSONObject()
                    .put("nicknames", longs)
                    .put("messages", strings)
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
