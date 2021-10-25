package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Employee;
import com.group39.fitbot.group39_fitbot.model.Login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserAddDAO {
        public static boolean addUser (Login user) throws SQLException, ClassNotFoundException{
            Connection connection= DBConnection.getInstance().getConnection();
            String query = "INSERT INTO users VALUES (?,?,?,?)";
            PreparedStatement pst = connection.prepareStatement(query);

            pst.setString(1, user.getUser_name());
            pst.setString(2, user.getPassword());
            pst.setString(3, user.getUserType());
            pst.setString(4, user.getMember_id());
            return pst.executeUpdate()>0;


        }
}
