package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Employee;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class EmployeeDAO {
    public static List<Employee> getEmployee() throws SQLException, ClassNotFoundException{
        List<Employee> employees = new ArrayList<>();
//        Employee employee = new Employee();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "(select *, \"Maintainer\" as type FROM maintainer ) UNION (select *, \"Instructor\" as type FROM instructor) UNION select *, \"Branch Manager\" as type FROM branch_manager";
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
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getDate(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getString(12)

                ));
            }
        }
        return employees;
    }
}


