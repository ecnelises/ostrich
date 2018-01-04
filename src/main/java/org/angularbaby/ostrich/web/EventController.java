package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.annotation.NeedsAuthentication;
import org.angularbaby.ostrich.entity.Event;
import org.angularbaby.ostrich.entity.User;
import org.angularbaby.ostrich.repository.EventRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/events", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventController extends ApplicationBaseController{

    @NeedsAuthentication
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);

        System.out.println((String) object.get("startTime"));

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");

        User user = super.currentUser();

        Date startTime = new Date();
        Date endTime = new Date();
        Date remindTime = new Date();

        try {
            startTime = format.parse((String) object.get("startTime"));
            endTime = format.parse((String) object.get("endTime"));
            remindTime = format.parse((String) object.get("remindTime"));
            System.out.println(startTime);
        }
        catch (Exception e){

        }
        String title = (String)object.get("title");
        String content = (String)object.get("content");
        try {
            //todo 权限控制
            Event event = new Event(user.getId(), startTime, endTime, remindTime, title, content);
            eventRepository.save(event);
            return new JSONObject()
                    .put("status", "ok")
                    .put("eventId", event.getId())
                    .toString();
        } catch (DataIntegrityViolationException exception) {
            return new JSONObject()
                    .put("status", "bad_request")
                    .put("error", exception.getMessage())
                    .toString();
        }
    }

    @RequestMapping(value = "/remove", method = RequestMethod.GET)
    public String remove(@RequestParam(name = "eventId") Long id) {
        try {
            //todo 权限控制
            eventRepository.delete(id);
            return new JSONObject()
                    .put("status", "ok")
                    .toString();
        } catch (DataIntegrityViolationException exception) {
            return new JSONObject()
                    .put("status", "bad_request")
                    .put("error", exception.getMessage())
                    .toString();
        }
    }

    @NeedsAuthentication
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        User user = currentUser();
        try {
            List<Event> events = eventRepository.findAllByUserId(user.getId());
            return new JSONObject()
                    .put("events", events)
                    .toString();
        } catch (DataIntegrityViolationException exception) {
            return new JSONObject()
                    .put("status", "bad_request")
                    .put("error", exception.getMessage())
                    .toString();
        }
    }

    @RequestMapping(value = "/find", method = RequestMethod.GET)
    public String findOne(@RequestParam(name = "eventId") Long id) {
        try {
            //todo 权限控制
            Event event = eventRepository.findOne(id);
            return new JSONObject()
                    .put("eventTitle", event.getTitle())
                    .put("eventContent", event.getContent())
                    .put("eventStartTime", event.getStartTime())
                    .put("eventEndTime", event.getEndTime())
                    .put("eventRemindTime", event.getRemindTime())
                    .toString();
        } catch (DataIntegrityViolationException exception) {
            return new JSONObject()
                    .put("status", "bad_request")
                    .put("error", exception.getMessage())
                    .toString();
        }
    }

    @Autowired
    private EventRepository eventRepository;
}
