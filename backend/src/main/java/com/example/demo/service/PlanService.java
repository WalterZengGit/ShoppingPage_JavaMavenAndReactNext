package com.example.demo.service;

import com.example.demo.model.Plan;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    public List<Plan> getPlans() {
        return List.of(
                new Plan("超快充", 200),
                new Plan("快充", 100),
                new Plan("慢充", 50)
        );
    }
}
