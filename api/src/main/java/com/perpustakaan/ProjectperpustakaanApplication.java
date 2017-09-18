package com.perpustakaan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ProjectperpustakaanApplication {

    @RequestMapping("/")
    public String hello() {
        return "HelloApp Running...";
    }

    public static void main(String[] args) {
        SpringApplication.run(ProjectperpustakaanApplication.class, args);
    }
}
