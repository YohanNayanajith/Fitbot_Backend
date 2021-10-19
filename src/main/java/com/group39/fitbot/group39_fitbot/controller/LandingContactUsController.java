package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.LandingContactDAO;
import com.group39.fitbot.group39_fitbot.model.LandingContact;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class LandingContactUsController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/contact_us/contact_landing.html");
        requestDispatcher.forward(req,resp);
        System.out.println("Contact page load");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String contact = req.getParameter("contact");
        String message = req.getParameter("message");

        System.out.println("call post method");
        System.out.println(name);
        System.out.println(email);
        System.out.println(contact);
        System.out.println(message);
        
       boolean addDone=false;

        try {
            addDone=  LandingContactDAO.addContact(new LandingContact(
                    name,
                    email,
                    contact,
                    message

            ));
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        if (addDone){
            System.out.println("Data added for the database");

        }else {
            System.out.println("Not add");
        }


    }
}
