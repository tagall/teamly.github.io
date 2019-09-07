//package app.service;
//
//import app.model.Dealer;
//import org.springframework.validation.annotation.Validated;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Validated
//public interface DealerService {
//
//    @NotNull Iterable<Dealer> getAllDealers();
//
//    Dealer getDealer(@Min(value = 1L, message = "Invalid dealer ID.") long id);
//
//    Dealer save(Dealer dealer);
//}
