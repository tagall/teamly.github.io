package app.model;


import java.util.Set;

public class Company {

    private final String name;

    private Set<User> employees;

    public Company(String name, Set<User> employees) {
        this.name = name;
        this.employees = employees;
    }

    public Company(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public Set<User> getEmployees() {
        return employees;
    }
}
