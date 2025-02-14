package com.example.demo.controller;

import com.example.demo.model.Plan;
import com.example.demo.service.PlanService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PlansController {

    private final PlanService planService;

    public PlansController(PlanService planService) {
        this.planService = planService;
    }

    @GetMapping("/plans")
    public Map<String, List<Plan>> getPlans() {
        Map<String, List<Plan>> response = new HashMap<>();
        response.put("data", planService.getPlans());
        return response;
    }
}
