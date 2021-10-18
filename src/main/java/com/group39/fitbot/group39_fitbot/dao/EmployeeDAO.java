package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Employee;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

public class EmployeeDAO {
    public static List<Employee> getEmployee() throws SQLException, ClassNotFoundException{
        List<Employee> employees = new ArrayList<>();
        Employee employee = new Employee();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM employee";
        PreparedStatement pst = connection.prepareStatement(query);
//        pst.setString(1,register.getFirst_name());

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                employees.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getDate(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9)
                ));
            }
        }
        return employees;
    }
}


