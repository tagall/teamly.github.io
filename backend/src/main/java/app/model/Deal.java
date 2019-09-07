//package app.model;
//
//import com.fasterxml.jackson.annotation.JsonFormat;
//
//import javax.validation.constraints.NotNull;
//import java.time.LocalDate;
//
//public class Deal {
//
//    @JsonFormat(pattern = "dd/MM/yyyy")
//    private final LocalDate dateCreated;
//
//    @NotNull(message = "Deal name is required.")
//    private final String name;
//
//    private final Double price;
//
//    private final Dealer dealer;
//
//    private final String pictureUrl;
//
//    public Deal(LocalDate dateCreated, @NotNull(message = "Deal name is required.") String name, Double price, Dealer dealer, String pictureUrl) {
//        this.dateCreated = dateCreated;
//        this.name = name;
//        this.price = price;
//        this.dealer = dealer;
//        this.pictureUrl = pictureUrl;
//    }
//
//    public LocalDate getDateCreated() {
//        return dateCreated;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public Double getPrice() {
//        return price;
//    }
//
//    public String getPictureUrl() {
//        return pictureUrl;
//    }
//
//    public Dealer getDealer() {
//        return dealer;
//    }
//}
