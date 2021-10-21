package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Employee;
import com.group39.fitbot.group39_fitbot.model.EmployeeCount;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeCountDAO {

        public static List<EmployeeCount> getEmployeeCount() throws SQLException, ClassNotFoundException{
            List<EmployeeCount> employeecount = new ArrayList<>();
//        Employee employee = new Employee();
            Connection connection = DBConnection.getInstance().getConnection();
            String query = "SELECT\n" +
                    "\t( SELECT count(*) FROM maintainer ) AS column1,\n" +
                    "\t( SELECT count(*) FROM instructor ) AS column2,\n" +
                    "\t( SELECT count(*) FROM branch_manager ) AS column3";
            PreparedStatement pst = connection.prepareStatement(query);
//        pst.setString(1,register.getFirst_name());

            ResultSet resultSet = pst.executeQuery();

            while (resultSet.next()) {
                if(resultSet != null) {
                    employeecount.add(new EmployeeCount(
                            resultSet.getInt(1),
                            resultSet.getInt(2),
                            resultSet.getInt(3)


                    ));
                }
            }
            return employeecount;
        }
}




