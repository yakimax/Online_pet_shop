package com.petshop.dto;

import java.util.ArrayList;
import java.util.List;

import com.petshop.entity.Product;

import lombok.Data;

@Data
public class ProductResponseDto extends CommonApiResponse {
	
	private List<Product> products = new ArrayList<>();

}
