package com.petshop.service ;

import java.util.List ;

import com.petshop.entity.Address ;
import com.petshop.entity.User ;

public interface AddressService {
	
	Address addAddress(Address address) ;
	
	Address updateAddress(Address address) ;
	
	Address getAddressById(int addressId) ;

}
