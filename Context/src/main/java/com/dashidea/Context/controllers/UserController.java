package com.dashidea.Context.controllers;
import com.dashidea.Context.dto.UserDTO;
import com.dashidea.Context.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api/v1/users")
@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserServices userServices;
    @GetMapping("/get-users")
    public List<UserDTO> getUser() { return userServices.getAllUsers();}

    @PostMapping("/save-user")
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        return userServices.saveUser(userDTO);
    }

    @PutMapping("/update-user")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) { return userServices.saveUser(userDTO);}

    @DeleteMapping("/delete-user/{id}")
    public boolean deleteUser(@PathVariable("id") int id) {
        return userServices.deleteUser(id);
    }

}
