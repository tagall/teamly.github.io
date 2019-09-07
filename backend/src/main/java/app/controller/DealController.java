//package app.controller;
//
//import app.model.Deal;
//import app.service.DealService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotNull;
//
//@RestController
////@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/deals")
//public class DealController {
//
//    DealService dealService;
//
//    public DealController(DealService dealService) {
//        this.dealService = dealService;
//    }
//
//    @GetMapping(value = {"", "/"})
//    public @NotNull Iterable<Deal> getDeals() {
//        return dealService.getAllDeals();
//    }
//
//
//    @PostMapping(value = {"", "/"})
//    public ResponseEntity<String> addDeal(@Valid @RequestBody Deal deal) {
//        dealService.save(deal);
//        return ResponseEntity.ok("Deal was added");
//    }
//
//}
