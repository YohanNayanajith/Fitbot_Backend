package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;

import java.sql.Connection;
import java.sql.SQLException;

public class InstructorDAO {
    public static void getInstructor() throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();

    }
}
