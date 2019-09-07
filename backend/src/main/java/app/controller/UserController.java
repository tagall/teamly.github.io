package app.controller;

import app.dao.UserDaoImpl;
import app.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {

    private UserDaoImpl userDao;

    public UserController(UserDaoImpl userDao) {
        this.userDao = userDao;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<User> getUsers() {
        return userDao.findAll();
    }

    @PostMapping(value = {"", "/"})
    public void addUser(User user) {
        userDao.insertUser(user);
    }

}
