package com.petshop.dto;

import java.util.ArrayList;
import java.util.List;

import com.petshop.entity.Review;

import lombok.Data;

@Data
public class ProductReviewResponseDto extends CommonApiResponse {
	
	private List<Review> reviews = new ArrayList<>();
	
	private double averageRating = 0.0;

}
