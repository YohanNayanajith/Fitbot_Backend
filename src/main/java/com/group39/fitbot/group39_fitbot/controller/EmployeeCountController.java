package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.EmployeeCountDAO;
import com.group39.fitbot.group39_fitbot.model.EmployeeCount;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeCountController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Employee get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/Employees/employees.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("EmployeeCount Post Method called");

//        Employee employee = new Employee();
        try {
            List<EmployeeCount> all_employee_count = new ArrayList<>();
            all_employee_count = EmployeeCountDAO.getEmployeeCount();
            System.out.println(all_employee_count);
            Gson gson = new Gson();
            String employeecountJSON = gson.toJson(all_employee_count);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(employeecountJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
}


