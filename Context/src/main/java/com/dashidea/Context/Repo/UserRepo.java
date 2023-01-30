package com.dashidea.Context.Repo;

import com.dashidea.Context.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {

}
