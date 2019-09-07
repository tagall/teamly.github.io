//package app.service;
//
//import app.jpa.CompanyRepository;
//import app.model.Company;
//import app.exception.ResourceNotFoundException;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//
//@Service
////@Transactional
//public class CompanyServiceImpl implements CompanyService {
//
//    private CompanyRepository companyRepository;
//
//    public CompanyServiceImpl(CompanyRepository companyRepository) {
//        this.companyRepository = companyRepository;
//    }
//
//    @Override
//    public @NotNull Iterable<Company> getAllCompanies() {
//        return companyRepository.findAll();
//    }
//
//    @Override
//    public Company getCompany(@Min(value = 1L, message = "Invalid company ID.") long id) {
//        return companyRepository
//                .findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Company not found"));
//    }
//
//    @Override
//    public Company save(Company company) {
//        return companyRepository.save(company);
//    }
//}
