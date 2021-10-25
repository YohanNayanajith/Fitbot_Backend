package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class BranchDetailsLandingController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Landing aboutus get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/branch_landing/barances_landing.html");
        requestDispatcher.forward(req, resp);
    }
}
