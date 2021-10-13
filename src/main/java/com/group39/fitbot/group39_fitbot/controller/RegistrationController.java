package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.RegistartionDAO;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import javax.servlet.Registration;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.obtainSHA;
import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.toHexStr;

public class RegistrationController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Registartion get contoller called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/RegistrationForm/Registration.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Registartion post contoller called");

        String first_name = req.getParameter("first_name");
        String last_name = req.getParameter("last_name");
        LocalDate dob = LocalDate.parse(req.getParameter("date_of_birth"));

        int phone_number = Integer.parseInt(req.getParameter("phone_number"));
        String address = req.getParameter("address");
        String selected_country = req.getParameter("selected_country");
        String gender = req.getParameter("gender");
        String reg_password = req.getParameter("reg_password");
        String confirm_password = req.getParameter("confirm_password");
        String membership_type = req.getParameter("membership_type");
        String membership_category = req.getParameter("membership_category");
        int height = Integer.parseInt(req.getParameter("height"));
        int weight = Integer.parseInt(req.getParameter("weight"));

        //password hashed - SHA256
        try {
            reg_password = toHexStr(obtainSHA(reg_password));
            System.out.println("Hashed Password is "+reg_password);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            System.out.println("Reg password is not hashing");
        }
        try {
            confirm_password = toHexStr(obtainSHA(confirm_password));
            System.out.println("Hashed Confirm Password is "+confirm_password);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            System.out.println("Confirm password is not hashing");
        }

        boolean added = false;

        try {
            added = RegistartionDAO.addRegistration(new Registartion(
                            first_name,
                            last_name,
                            dob,
                            phone_number,
                            address,
                            selected_country,
                            gender,
                            reg_password,
                            confirm_password,
                            membership_type,
                            membership_category,
                            height,
                            weight
                    )
            );

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if(added){
            System.out.println("Added");
            req.setAttribute("message","Successfully added");

        }else{
            System.out.println("Not added");
            req.setAttribute("message","Not Added");
        }
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("medical");
        requestDispatcher.forward(req, resp);
    }
}
