package com.example.demo.service;

import com.example.demo.model.About;
import org.springframework.stereotype.Service;

@Service
public class AboutService {

    public About getAboutContent() {
        return new About("<p>我們致力於提供最優質的充電服務。</p><p>請查看<span style='color:red'>方案列表</span>了解我們提供的服務與價格</p>");
    }
}
