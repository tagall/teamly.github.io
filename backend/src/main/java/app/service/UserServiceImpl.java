//package app.service;
//
//import app.jpa.UserRepository;
//import app.model.User;
//import app.exception.ResourceNotFoundException;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Service
//@Transactional
//public class UserServiceImpl implements UserService {
//
//    private UserRepository userRepository;
//
//    public UserServiceImpl(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public @NotNull Iterable<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    @Override
//    public User getUser(@Min(value = 1L, message = "Invalid user ID.") long id) {
//        return userRepository
//                .findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
//    }
//
//    @Override
//    public User save(User user) {
//        return userRepository.save(user);
//    }
//}
