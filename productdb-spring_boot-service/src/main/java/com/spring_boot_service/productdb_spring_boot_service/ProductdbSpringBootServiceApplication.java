package com.spring_boot_service.productdb_spring_boot_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProductdbSpringBootServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductdbSpringBootServiceApplication.class, args);
	}

}
