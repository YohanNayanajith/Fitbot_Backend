package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.EmployeeAddDAO;

import com.group39.fitbot.group39_fitbot.dao.UserAddDAO;
import com.group39.fitbot.group39_fitbot.model.Employee;
import com.group39.fitbot.group39_fitbot.model.Login;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Objects;


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
        resp.setContentType("text/plain");


        String type = req.getParameter("designation");
        String employee_id = req.getParameter("employee_id");
        String branch_name = req.getParameter("branch_name");
        String first_name = req.getParameter("first_name_employee");
        String last_name = req.getParameter("last_name_employee");
        String gender = req.getParameter("gender_employee");
        String email = req.getParameter("email_employee");
        String nic = req.getParameter("nic_employee");
        String dob = req.getParameter("date_of_birth_employee");

        String address = req.getParameter("address_employee");
        String primarycontact = req.getParameter("contact_no1_employee");
        String secondarycontact =req.getParameter("contact_no2_employee");
        LocalDate date_joined = LocalDate.now();
        String status = req.getParameter("status");


        String Maintainer = "Maintainer";
        String Branch_Manager = "Branch Manager";
        String Instructor ="Instructor";

        System.out.println(type);

        boolean added =false;



        if (Objects.equals(type, "maintainer")){
            System.out.println("intomaintainer");
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
                        secondarycontact,
                        date_joined,
                        status


                ));
                UserAddDAO.addUser(new Login(
                        employee_id,
                        employee_id,
                        Maintainer,
                        employee_id

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
       }

        else if (Objects.equals(type, "instructor")){
            System.out.println("intoinstructor");
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
                        secondarycontact,
                        date_joined,
                        status


                ));
                UserAddDAO.addUser(new Login(
                        employee_id,
                        employee_id,
                        Instructor,
                        employee_id

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }

        else if (Objects.equals(type, "branch_manager")){
            System.out.println("branch_manager");
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
                        secondarycontact,
                        date_joined,
                        status


                ));
                UserAddDAO.addUser(new Login(
                        employee_id,
                        employee_id,
                        Branch_Manager,
                        employee_id

                ));
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }

        if (added) {
            System.out.println("added");
//            resp.sendRedirect(req.getContextPath()+"/employee");
            out.print("1");

        }
        else {
            System.out.println("not added");
            out.print("0");
        }

    }
}
