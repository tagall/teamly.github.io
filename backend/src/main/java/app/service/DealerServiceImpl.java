//package app.service;
//
//import app.jpa.DealerRepository;
//import app.model.Dealer;
//import app.exception.ResourceNotFoundException;
//import app.jpa.DealRepository;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Service
//@Transactional
//public class DealerServiceImpl implements DealerService {
//
//    private DealerRepository dealerRepository;
//
//    public DealerServiceImpl(DealRepository dealRepository) {
//        this.dealerRepository = dealerRepository;
//    }
//
//
//    public @NotNull Iterable<Dealer> getAllDealers() {
//        return dealerRepository.findAll();
//    }
//
//    public Dealer getDealer(@Min(value = 1L, message = "Invalid dealer ID.") long id) {
//        return dealerRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Dealer not found"));
//    }
//
//    public Dealer save(Dealer deal) {
//        return dealerRepository.save(deal);
//    }
//}
