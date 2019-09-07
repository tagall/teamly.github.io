//package app.model;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotNull;
//import java.util.ArrayList;
//import java.util.List;
//
//public class Dealer {
//    @NotNull(message = "Dealer name is required.")
//    private final String name;
//
//    @Valid
//    private List<Deal> deals = new ArrayList<>();
//
//    public Dealer(String name) {
//        this.name = name;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public List<Deal> getDeals() {
//        return deals;
//    }
//}
