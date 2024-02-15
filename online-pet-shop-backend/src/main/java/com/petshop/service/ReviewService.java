package com.petshop.service;

import java.util.List;

import com.petshop.entity.Product;
import com.petshop.entity.Review;
import com.petshop.entity.User;

public interface ReviewService {
	
	Review addReview(Review review);
	
	List<Review> fetchProductReviews(List<Product> products);

	List<Review> fetchSellerProductReview(User seller);
	
}
