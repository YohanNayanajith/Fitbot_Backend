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
    // Function to retrieve all employees
    public static List<Employee> getEmployee() throws SQLException, ClassNotFoundException{
        List<Employee> employees = new ArrayList<>();
//
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " select *, \"Branch Manager\" as designation FROM branch_manager UNION select *, \"Maintainer\" as designation FROM maintainer  ";
        //String query= "((select *, \"Branch Manager\" as designation FROM branch_manager) UNION ALL (select *, \"Instructor\" as designation FROM instructor) UNION (select *, \"Maintainer\" as designation FROM maintainer ))";
        String query1= "select *, \"Instructor\" as designation FROM instructor UNION select *, \"Maintainer\" as designation FROM maintainer UNION select *, \"Branch Manager\" as designation FROM branch_manager";
        PreparedStatement pst = connection.prepareStatement(query1);

        ResultSet resultSet = pst.executeQuery();
        System.out.println(resultSet);

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
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13),
                        resultSet.getString(14)


                ));

            }
        }
        return employees;
    }

    //Function to retrive intructors relevant to each branch
    public static List<Employee> getInstructor(String branchid) throws SQLException, ClassNotFoundException{
        List<Employee> instructors = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " Select * FROM instructor where branch_id=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,branchid);

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                instructors.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13)



                ));

            }
        }
        return instructors;
    }

    //Function to retrieve branchmanagers relevant to each branch
    public static List<Employee> getBranchManager(String branchid) throws SQLException, ClassNotFoundException{
        List<Employee> branch_managers = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " Select * FROM branch_manager where branch_id=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,branchid);

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                branch_managers.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13)



                ));

            }
        }
        return branch_managers;
    }

    //Remove Instructor
    public static boolean removeinstructor(String employee_id) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE instructor SET status=? WHERE instructor_id=?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,"inactive");
        pst.setString(2,employee_id);

        System.out.println("Instructor Removed Successfully");

        return pst.executeUpdate() > 0;
    }

    //Remove Instructor
    public static boolean removemaintainer(String employee_id) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE maintainer SET status=? WHERE maintainer_id=?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,"inactive");
        pst.setString(2,employee_id);

        System.out.println("Maintainer Removed Successfully");

        return pst.executeUpdate() > 0;
    }

    //Remove BranchManager
    //Remove Instructor
    public static boolean removebranchmanager(String employee_id) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE branch_manager SET status=? WHERE branchmanager_id=?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,"inactive");
        pst.setString(2,employee_id);
        System.out.println(employee_id);
        System.out.println("Branch Manager Removed Successfully");

        return pst.executeUpdate() > 0;
    }

    public static List<Employee> getInstructor() throws SQLException, ClassNotFoundException{
        List<Employee> instructors = new ArrayList<>();
//
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " select *, \"Branch Manager\" as designation FROM branch_manager UNION select *, \"Maintainer\" as designation FROM maintainer  ";
        //String query= "((select *, \"Branch Manager\" as designation FROM branch_manager) UNION ALL (select *, \"Instructor\" as designation FROM instructor) UNION (select *, \"Maintainer\" as designation FROM maintainer ))";
        String query1= "select *, \"Instructor\" as designation FROM instructor ";
        PreparedStatement pst = connection.prepareStatement(query1);

        ResultSet resultSet = pst.executeQuery();
        System.out.println(resultSet);

        while (resultSet.next()) {
            if(resultSet != null) {
                instructors.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13),
                        resultSet.getString(14)


                ));

            }
        }
        return instructors;
    }

    public static List<Employee> getBranchManager() throws SQLException, ClassNotFoundException{
        List<Employee> branch_managers = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " select *, \"Branch Manager\" as designation FROM branch_manager";
        PreparedStatement pst = connection.prepareStatement(query);

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                branch_managers.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13)



                ));

            }
        }
        return branch_managers;
    }

    public static List<Employee> getMaintainers() throws SQLException, ClassNotFoundException{
        List<Employee> maintainers = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " select * FROM maintainer";
        PreparedStatement pst = connection.prepareStatement(query);

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                maintainers.add(new Employee(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getDate(12).toLocalDate(),
                        resultSet.getString(13)



                ));

            }
        }
        return maintainers;
    }


}


