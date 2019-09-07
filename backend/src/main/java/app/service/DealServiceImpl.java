//package app.service;
//
//import app.exception.ResourceNotFoundException;
//import app.jpa.DealRepository;
//import app.model.Deal;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Service
//@Transactional
//public class DealServiceImpl implements DealService {
//
//    private DealRepository dealRepository;
//
//    public DealServiceImpl(DealRepository dealRepository) {
//        this.dealRepository = dealRepository;
//    }
//
//
//    public @NotNull Iterable<Deal> getAllDeals() {
//        return dealRepository.findAll();
//    }
//
//    public Deal getDeal(@Min(value = 1L, message = "Invalid deal ID.") long id) {
//        return dealRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Deal not found"));
//    }
//
//    public Deal save(Deal deal) {
//        return dealRepository.save(deal);
//    }
//}
