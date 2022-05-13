package com.genspark.ReactFormBackend.Dao;

import com.genspark.ReactFormBackend.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
}
