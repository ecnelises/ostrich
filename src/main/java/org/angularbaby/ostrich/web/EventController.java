package org.angularbaby.ostrich.web;

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
public class EventController {
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@RequestBody String param) {
        JsonParser parser = JsonParserFactory.getJsonParser();
        Map<String, Object> object = parser.parseMap(param);

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");

        Date startTime = new Date();
        Date endTime = new Date();
        Date remindTime = new Date();

        try {
            startTime = format.parse((String) object.get("startTime"));
            endTime = format.parse((String) object.get("endTime"));
            remindTime = format.parse((String) object.get("remindTime"));
        }
        catch (Exception e){

        }
        String title = (String)object.get("title");
        String content = (String)object.get("content");
        try {
            //todo 权限控制
            Event event = new Event(new Long(1), startTime, endTime, remindTime, title, content);
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

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        try {
            //todo 权限控制
            List<Event> events = eventRepository.findAll();
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

    @Autowired
    private EventRepository eventRepository;
}
