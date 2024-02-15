package com.petshop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.petshop.entity.User;
import com.petshop.service.UserService;
import com.petshop.utility.Constants.UserRole;
import com.petshop.utility.Constants.UserStatus;

@SpringBootApplication
public class OnlinePetShopApplication implements CommandLineRunner {

	private final Logger LOG = LoggerFactory.getLogger(OnlinePetShopApplication.class);

	@Autowired
	private UserService userService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(OnlinePetShopApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		User admin = this.userService.getUserByEmailIdAndRoleAndStatus("demo.admin@demo.com",
				UserRole.ROLE_ADMIN.value(), UserStatus.ACTIVE.value());

		if (admin == null) {

			LOG.info("Admin not found in system, so adding default admin");

			User user = new User();
			user.setEmailId("demo.admin@demo.com");
			user.setPassword(passwordEncoder.encode("123456"));
			user.setRole(UserRole.ROLE_ADMIN.value());
			user.setStatus(UserStatus.ACTIVE.value());

			this.userService.addUser(user);

		}

	}

}
