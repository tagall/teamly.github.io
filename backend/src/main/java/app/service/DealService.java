//package app.service;
//
//import app.model.Deal;
//import org.springframework.validation.annotation.Validated;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Validated
//public interface DealService {
//
//    @NotNull Iterable<Deal> getAllDeals();
//
//    Deal getDeal(@Min(value = 1L, message = "Invalid deal ID.") long id);
//
//    Deal save(Deal deal);
//}
