package com.petshop.dto;

import java.util.ArrayList;
import java.util.List;

import com.petshop.entity.Orders;

import lombok.Data;

@Data
public class OrderResponseDto extends CommonApiResponse {
	
	private List<Orders> orders = new ArrayList<>();

}
