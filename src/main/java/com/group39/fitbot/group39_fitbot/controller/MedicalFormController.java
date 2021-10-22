package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MedicalFormController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Medical form controller is called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/MedicalForm/MedicalForm.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Medical Form post method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/MedicalForm/MedicalForm.html");
        requestDispatcher.forward(req,resp);
    }
}
