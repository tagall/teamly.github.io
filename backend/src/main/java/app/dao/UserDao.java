package app.dao;

import app.model.User;

import java.util.List;

public interface UserDao {

    List findAll();

    void insertUser(User emp);

    void updateUser(User emp);

    void executeUpdateUser(User emp);

    public void deleteUser(User emp);

}
