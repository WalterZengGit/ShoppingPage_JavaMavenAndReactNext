package com.example.demo.service;

import com.example.demo.model.Carousel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarouselService {

    public List<Carousel> getCarouselImages() {
        return List.of(
                new Carousel("/carousel/01.jpg"),
                new Carousel("/carousel/02.jpg"),
                new Carousel("/carousel/03.jpg")
        );
    }
}