package com.example.demo.controller;

import com.example.demo.model.About;
import com.example.demo.service.AboutService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AboutController {

    private final AboutService aboutService;

    public AboutController(AboutService aboutService) {
        this.aboutService = aboutService;
    }

    @GetMapping("/about")
    public Map<String, String> getAbout() {
        Map<String, String> response = new HashMap<>();
        response.put("data", aboutService.getAboutContent().getContent());
        return response;
    }
}
