//package app.service;
//
//import app.model.Company;
//import org.springframework.validation.annotation.Validated;
//
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Validated
//public interface CompanyService {
//    @NotNull Iterable<Company> getAllCompanies();
//
//    Company getCompany(@Min(value = 1L, message = "Invalid company ID.") long id);
//
//    Company save(Company company);
//}
