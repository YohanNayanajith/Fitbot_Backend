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
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class RemoveEmployeeController extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("EmployeeRemove get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/Employees/employees.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");

        String employee_id = req.getParameter("employee_id");
        String designation = req.getParameter("designation");

        boolean removed = false;

        try {
           if(Objects.equals(designation,"Branch Manager"))
            {
                removed =EmployeeDAO.removebranchmanager(employee_id);
            }
           else if (Objects.equals(designation,"Instructor"))
           {
               removed = EmployeeDAO.removeinstructor(employee_id);
           }
           else
           {
               removed = EmployeeDAO.removemaintainer(employee_id);
           }
    } catch (SQLException e) {
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    }

        if (removed) {
            System.out.println("added");
            out.print("1");

        }
        else {
            System.out.println("not added");
            out.print("0");
        }
}
}
