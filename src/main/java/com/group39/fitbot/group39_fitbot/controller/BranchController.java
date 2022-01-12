package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.BranchDAO;
import com.group39.fitbot.group39_fitbot.dao.EmployeeDAO;
import com.group39.fitbot.group39_fitbot.model.Branch;
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

public class BranchController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Branch get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/Branches/branches.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("BRanch Post Method called");

//        Employee employee = new Employee();
        try {
            List<Branch> all_branches = new ArrayList<>();
            all_branches = BranchDAO.getBranch();
            System.out.println(all_branches);
            Gson gson = new Gson();
            String employeeJSON = gson.toJson(all_branches);
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

