package org.angularbaby.ostrich.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {
    @RequestMapping(method = RequestMethod.POST)
    public String create() {
        return "";
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public String destroy() {
        return "";
    }
}
