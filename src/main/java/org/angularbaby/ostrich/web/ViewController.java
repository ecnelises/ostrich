package org.angularbaby.ostrich.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({ "/register", "/introduction", "/login", "/projects", "/project-detail/{id:\\d+}", "/confirm/{id:\\w+}", "/join/{id:\\d+}", "/chat","/calendar","/notification","/files" })
    public String index() {
        return "forward:/index.html";
    }
}
