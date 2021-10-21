package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.EmployeeAddDAO;

import com.group39.fitbot.group39_fitbot.model.Employee;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.sql.Date;


public class EmployeeAddController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Employeeadd get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/AddEmployees/employee_add.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Employee Add Post Method Called");
        PrintWriter out = resp.getWriter();

        String type = req.getParameter("designation");
        String employee_id = req.getParameter("employee_id");
        String branch_name = req.getParameter("branch_name");
        String first_name = req.getParameter("first_name_employee");
        String last_name = req.getParameter("last_name_employee");
        String gender = req.getParameter("gender_employee");
        String email = req.getParameter("email_employee");
        String nic = req.getParameter("nic_employee");
        Date dob = Date.valueOf((req.getParameter("date_of_birth_employee")));

        String address = req.getParameter("address_employee");
        String primarycontact = req.getParameter("contact_no1_employee");
        String secondarycontact =req.getParameter("contact_no2_employee");

        System.out.println(type);

        boolean added =false;



        if (type=="maintainer"){

            try {
                added = EmployeeAddDAO.addMaintainer(new Employee(
                        employee_id,
                        branch_name,
                        first_name,
                        last_name,
                        gender,
                        email,
                        nic,
                        dob,
                        address,
                        primarycontact,
                        secondarycontact

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
       }

        else if (type!="instructor"){
            try {
                added = EmployeeAddDAO.addInstructor(new Employee(
                        employee_id,
                        branch_name,
                        first_name,
                        last_name,
                        gender,
                        email,
                        nic,
                        dob,
                        address,
                        primarycontact,
                        secondarycontact

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }

        else if (type=="branch_manager"){
            try {
                added = EmployeeAddDAO.addbranchmanager(new Employee(
                        employee_id,
                        branch_name,
                        first_name,
                        last_name,
                        gender,
                        email,
                        nic,
                        dob,
                        address,
                        primarycontact,
                        secondarycontact

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }

        if (added) {
            System.out.println("added");
            out.write("1");
        }
        else {
            System.out.println("not added");
            out.write("0");
        }

    }
}
