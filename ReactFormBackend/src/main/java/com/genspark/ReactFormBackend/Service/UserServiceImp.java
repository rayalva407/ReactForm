package com.genspark.ReactFormBackend.Service;

import com.genspark.ReactFormBackend.Dao.UserDao;
import com.genspark.ReactFormBackend.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    UserDao userDao;
    @Override
    public User addUser(User user) {
        User blah = new User(user.getUsername(), user.getPassword(), user.getOccupation(), user.getCountry());
        if (!userDao.existsById(user.getId())) {
            return userDao.save(blah);
        }
        return user;
    }
}
