package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import java.sql.*;
import java.time.LocalDate;

public class EditProfileDAO {
    public static boolean updateMemberDetails(Registartion registartion) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE register SET first_name=?,last_name=?,dob=?,phone_number=?,height=?,weight=? WHERE member_id=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,registartion.getFirst_name());
        pst.setString(2,registartion.getLast_name());
        pst.setDate(3, Date.valueOf(registartion.getDate_of_birth()));
        pst.setInt(4,registartion.getContact_number());
        pst.setInt(5,registartion.getHeight());
        pst.setInt(6,registartion.getWeight());
        pst.setString(7,registartion.getMember_id());

        System.out.println("Edit profile DAO");
        return pst.executeUpdate() > 0;
    }

    public static boolean updateLoginDetails(Registartion registartion) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE users SET user_name=? WHERE member_id=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,registartion.getFirst_name());
        pst.setString(2,registartion.getMember_id());

//        System.out.println("Edit profile  DAO");
        return pst.executeUpdate() > 0;
    }

    public static Registartion retriveRegistration(String member_id) throws SQLException, ClassNotFoundException {
        Registartion register = new Registartion();

        Connection connection = DBConnection.getInstance().getConnection();

        String query = "SELECT first_name,last_name,dob,phone_number,height,weight FROM register WHERE member_id= ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1, member_id);
//        pst.setString(3,login.getUserType());

        ResultSet resultSet = pst.executeQuery();

        if (resultSet.next()) {
            register.setFirst_name(resultSet.getString(1));
            register.setLast_name(resultSet.getString(2));
            register.setDate_of_birth((resultSet.getDate(3)).toLocalDate());
            register.setContact_number(resultSet.getInt(4));
            register.setWeight(resultSet.getInt(5));
            register.setHeight(resultSet.getInt(6));
            return register;
        } else {
            return null;
        }
    }
}
