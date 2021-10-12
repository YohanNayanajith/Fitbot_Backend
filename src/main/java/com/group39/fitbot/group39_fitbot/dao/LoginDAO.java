package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginDAO {
    public static Login getLoginData(Login login) throws SQLException, ClassNotFoundException {
        Login new_login = new Login();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM users WHERE user_name=? AND password=?;";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,login.getUser_name());
        pst.setString(2,login.getPassword());
//        pst.setString(3,login.getUserType());

        ResultSet resultSet = pst.executeQuery();

        if(resultSet.next()){
            new_login.setUser_name(resultSet.getString(1));
            new_login.setPassword(resultSet.getString(2));
            new_login.setUserType(resultSet.getString(3));
            new_login.setMember_id(resultSet.getString(4));
            System.out.println("LoginDAO object is called");
            System.out.println("new Login object of login DAO"+new_login);
            return new_login;
        }else {
            return null;
        }
    }
}
