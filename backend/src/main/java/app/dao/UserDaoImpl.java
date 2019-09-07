package app.dao;

import app.model.User;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    private final NamedParameterJdbcTemplate template;

    public UserDaoImpl(NamedParameterJdbcTemplate template) {
        this.template = template;
    }

    @Override
    public List<User> findAll() {
        return template.query("SELECT * FROM teamly.user",new UserRowMapper());
    }

    @Override
    public void insertUser(User user) {
        final String sql = "INSERT INTO teamly.user (name, surname, email, isHr, companyName) VALUES" +
                "(:name, :surname, :email, :isHr, :companyName)";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
                .addValue("name", user.getName())
                .addValue("surname", user.getSurname())
                .addValue("email", user.getEmail())
                .addValue("isHr", user.isHr())
                .addValue("companyName", user.getCompanyName());
        template.update(sql,param, holder);

    }

    @Override
    public void updateUser(User user) {
//        final String sql = "UPDATE teamly.user set " +
//                "name=:name, " +
//                "surname=:surname, email=:email, isHr=:isHr, companyName=:companyName WHERE " +
//                "(:name, :surname, :email, :isHr, :companyName)";
//        KeyHolder holder = new GeneratedKeyHolder();
//        SqlParameterSource param = new MapSqlParameterSource()
//                .addValue("name", user.getName())
//                .addValue("surname", user.getSurname())
//                .addValue("email", user.getEmail())
//                .addValue("isHr", user.isHr())
//                .addValue("companyName", user.getCompanyName());
//        template.update(sql,param, holder);

    }

    @Override
    public void executeUpdateUser(User emp) {

    }

    @Override
    public void deleteUser(User emp) {

    }
}
