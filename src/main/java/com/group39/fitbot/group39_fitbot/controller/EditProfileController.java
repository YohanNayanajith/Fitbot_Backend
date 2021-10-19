package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class EditProfileController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Virtual Member/EditProfile/editProfileV.html");
        requestDispatcher.forward(req,resp);

//        PrintWriter out = resp.getWriter();
//        out.print("<h1>Hellow Shalani</h1>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("call post method");

        String image = req.getParameter("image");
        String fname = req.getParameter("fname");
        String lname = req.getParameter("lname");
        String contact = req.getParameter("contact");
        String email = req.getParameter("email");
        String dob = req.getParameter("dob");
        String Old_pass = req.getParameter("Old_pass");
        String new_password = req.getParameter("new_password");
        String Conf_pass = req.getParameter("Conf_pass");

        System.out.println("fname");


    }
}
