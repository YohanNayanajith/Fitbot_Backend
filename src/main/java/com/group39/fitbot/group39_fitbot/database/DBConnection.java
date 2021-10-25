package com.group39.fitbot.group39_fitbot.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private final String host = "localhost";
    private final String port = "3306";
//    private final String database = "employee_java";
    private final String database = "group_39_fitbot_test_train";
    private final String username = "root";
    private final String password = "";

    private Connection connection;
    private static DBConnection dbconnection;

    public DBConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://"+host+":"+port+"/"+database;
        connection = DriverManager.getConnection(url,username,password);
    }
    public static DBConnection getInstance() throws SQLException, ClassNotFoundException {
        if(dbconnection == null){
            //dbconnection object
            dbconnection = new DBConnection();
        }
        return dbconnection;
    }
    public Connection getConnection() {
        return connection;
    }
}
