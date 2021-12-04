package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GetMemberCountDAO {
    public static int getMemberCount() throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT COUNT(*) AS count_mem1 FROM register;";
        PreparedStatement pst = connection.prepareStatement(query);
        ResultSet resultSet = pst.executeQuery();

        System.out.println(resultSet);

        int value = -1;

        if(resultSet.next()) {
            if (resultSet != null) {
                value = resultSet.getInt(1);
                System.out.println(value);
            }

        }
        return value;
    }

    public static int getPaymentsCount() throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT COUNT(*) AS count_pay1 FROM online_payment;";
        PreparedStatement pst = connection.prepareStatement(query);
        ResultSet resultSet = pst.executeQuery();

        System.out.println(resultSet);

        int value = -1;

        if(resultSet.next()) {
            if (resultSet != null) {
                value = resultSet.getInt(1);
                System.out.println(value);
            }

        }
        return value;
    }
}
