//package app.service;
//
//import app.model.User;
//import org.springframework.validation.annotation.Validated;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//import java.beans.Transient;
//
//@Validated
//public interface UserService {
//    @NotNull Iterable<User> getAllUsers();
//
//    User getUser(@Min(value = 1L, message = "Invalid user ID.") long id);
//
//    @Transient
//    User save(User user);
//}
