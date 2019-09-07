//package app.controller;
//
//import app.model.Dealer;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import app.service.DealerService;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotNull;
//
//@RestController
////@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/dealers")
//public class DealerController {
//
//    DealerService dealerService;
//
//    public DealerController(DealerService dealerService) {
//        this.dealerService = dealerService;
//    }
//
//    @GetMapping(value = {"", "/"})
//    public @NotNull Iterable<Dealer> getDealers() {
//        return dealerService.getAllDealers();
//    }
//
//
//    @PostMapping(value = {"", "/"})
//    public ResponseEntity<String> addDealer(@Valid @RequestBody Dealer dealer) {
//        dealerService.save(dealer);
//        return ResponseEntity.ok("Dealer was added");
//    }
//
//}
