package com.spring_boot.productDb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProductDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductDbApplication.class, args);
	}

}
