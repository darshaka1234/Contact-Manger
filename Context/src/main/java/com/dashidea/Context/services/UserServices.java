package com.dashidea.Context.services;

import com.dashidea.Context.dto.UserDTO;
import com.dashidea.Context.Repo.UserRepo;
import com.dashidea.Context.entity.User;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserServices {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    public UserDTO saveUser(UserDTO userDTO){
       userRepo.save(modelMapper.map(userDTO, User.class));
       return userDTO;
    }

    public List<UserDTO> getAllUsers(){
        List<User>userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }

    public boolean deleteUser(int id){
        userRepo.deleteById(id);
        return true;
    }
}
