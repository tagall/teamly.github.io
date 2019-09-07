package app.model;

public class User {
    private final String name;
    private final String surname;
    private final String email;
    private final String companyName;
    private final boolean isHr;

    public User(String name, String surname, String email, String company, boolean isHr) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.companyName = company;
        this.isHr = isHr;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public boolean isHr() {
        return isHr;
    }
}
