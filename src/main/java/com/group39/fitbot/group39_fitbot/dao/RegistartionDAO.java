package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Member;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import java.sql.*;

public class RegistartionDAO {
    public static boolean addRegistration(Registartion register) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO register VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,register.getFirst_name());
        pst.setString(2,register.getLast_name());
        pst.setDate(3, Date.valueOf(register.getDate_of_birth()));
        pst.setInt(4,register.getContact_number());
        pst.setString(5,register.getAddress());
        pst.setString(6,register.getCountry());
        pst.setString(7,register.getGender());
        pst.setString(8,register.getPassword());
        pst.setString(9,register.getConfirm_password());
        pst.setString(10,register.getMember_type());
        pst.setString(11,register.getMembership_category());

        pst.setInt(12,register.getHeight());
        pst.setInt(13,register.getWeight());

        return pst.executeUpdate() > 0;
    }

    public static Registartion retriveRegistration(Login login) throws SQLException, ClassNotFoundException {
        Registartion register = new Registartion();

        Connection connection = DBConnection.getInstance().getConnection();

        String query = "SELECT * FROM register WHERE member_id= ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1, login.getMember_id());
//        pst.setString(3,login.getUserType());

        ResultSet resultSet = pst.executeQuery();

        if (resultSet.next()) {
            register.setMember_id(resultSet.getString(1));
            register.setRegister_id(resultSet.getString(2));
            register.setWeight(resultSet.getInt(3));
            register.setHeight(resultSet.getInt(4));
            register.setMember_type(resultSet.getString(5));
            return register;
        } else {
            return null;
        }
    }
}
