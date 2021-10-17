package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.ResetPassword;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class PasswordConfirmDAO {
    public static boolean setNewPassword(ResetPassword reset) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE register SET password=?,confirm_password=? WHERE phone_number=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,reset.getPassword());
        pst.setString(2,reset.getConfirm_password());
        pst.setInt(3,reset.getPhone_number());

        System.out.println("Registration DAO");
        return pst.executeUpdate() > 0;
    }
}
