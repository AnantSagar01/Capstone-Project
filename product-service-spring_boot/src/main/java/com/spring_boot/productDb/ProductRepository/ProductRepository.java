package com.spring_boot.productDb.ProductRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring_boot.productDb.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}