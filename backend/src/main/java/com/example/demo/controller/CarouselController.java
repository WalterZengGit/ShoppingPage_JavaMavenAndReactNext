package com.example.demo.controller;

import com.example.demo.model.Carousel;
import com.example.demo.service.CarouselService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CarouselController {

    private final CarouselService carouselService;

    public CarouselController(CarouselService carouselService) {
        this.carouselService = carouselService;
    }

    @GetMapping("/carousel")
    public Map<String, List<Carousel>> getCarouselImages() {
        Map<String, List<Carousel>> response = new HashMap<>();
        response.put("data", carouselService.getCarouselImages());
        return response;
    }
}