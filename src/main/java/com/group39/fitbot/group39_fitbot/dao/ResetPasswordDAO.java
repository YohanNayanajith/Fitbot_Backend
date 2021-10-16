package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.ResetPassword;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ResetPasswordDAO {
    public static ResetPassword getContactDetails(ResetPassword reset) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT first_name,last_name,phone_number,password,confirm_password FROM register WHERE phone_number = ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setInt(1,reset.getPhone_number());

        ResultSet resultSet = pst.executeQuery();

        if(resultSet.next()){
            reset.setFirst_name(resultSet.getString(1));
            reset.setLast_name(resultSet.getString(2));
            reset.setPhone_number(resultSet.getInt(3));
            reset.setPassword(resultSet.getString(4));
            reset.setConfirm_password(resultSet.getString(5));

            System.out.println("ResetDAO object is called");
            return reset;
        }else {
            return null;
        }
    }
}
