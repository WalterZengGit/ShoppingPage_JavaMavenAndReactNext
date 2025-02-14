package com.example.demo.model;

public class Plan {
    private String name;
    private int price;

    public Plan(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }
}