//package app.controller;
//
//
//import app.model.Company;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import app.service.CompanyService;
//
//import javax.validation.Valid;
//
//@RestController
////@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/companies")
//public class CompanyController {
//
//    CompanyService companyService;
//
//    public CompanyController(CompanyService companyService) {
//        this.companyService = companyService;
//    }
//
//    @GetMapping(value = {"", "/"})
//    public Iterable<Company> getAllCompanies() {
//        return companyService.getAllCompanies();
//    }
//
//    @PostMapping(value = {"", "/"})
//    public ResponseEntity<String> addCompany(@Valid @RequestBody Company company) {
//        companyService.save(company);
//        return ResponseEntity.ok("Company was added");
//    }
//
//}
