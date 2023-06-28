package com.theshy.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class FullstackBackendApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(FullstackBackendApplication.class, args);
	}
}