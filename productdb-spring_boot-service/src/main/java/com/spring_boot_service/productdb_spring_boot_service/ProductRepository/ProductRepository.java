package com.spring_boot_service.productdb_spring_boot_service.ProductRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring_boot_service.productdb_spring_boot_service.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
