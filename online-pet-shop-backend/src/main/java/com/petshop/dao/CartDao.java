package com.petshop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petshop.entity.Cart;
import com.petshop.entity.User;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {

	List<Cart> findByUser(User user);

}
