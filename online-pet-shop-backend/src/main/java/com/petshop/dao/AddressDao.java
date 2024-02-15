package com.petshop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petshop.entity.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
