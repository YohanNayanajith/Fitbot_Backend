package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.EmployeeDAO;
import com.group39.fitbot.group39_fitbot.model.Employee;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class EmployeeController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Employee get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/Employees/employees.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Employee Post Method called");

        String type = req.getParameter("type");
        System.out.println(type);

        Employee employee = new Employee();
        try {
            List<Employee> all_employees = new ArrayList<>();
            if (Objects.equals(type,"All")) {
                all_employees = EmployeeDAO.getEmployee();
                System.out.println(all_employees);
            }
            else if (Objects.equals(type,"Instructor")) {
                all_employees = EmployeeDAO.getInstructor();
                System.out.println(all_employees);
            }
            else if (Objects.equals(type,"Maintainer")) {
                all_employees = EmployeeDAO.getMaintainers();
                System.out.println(all_employees);
            }
            else if (Objects.equals(type,"Branch Manager")) {
                all_employees = EmployeeDAO.getBranchManager();
                System.out.println(all_employees);
            }
            Gson gson = new Gson();
            String employeeJSON = gson.toJson(all_employees);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(employeeJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
    }

