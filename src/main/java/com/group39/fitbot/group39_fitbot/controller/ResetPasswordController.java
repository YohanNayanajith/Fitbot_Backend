package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.ResetPasswordDAO;
import com.group39.fitbot.group39_fitbot.model.ResetPassword;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import static java.lang.Integer.parseInt;

public class ResetPasswordController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Reset password controller get method called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Reset password controller post method called");

        PrintWriter out = resp.getWriter();
//        Gson gson = new Gson();
//        String resetJSON = gson.toString();
//        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
//        resp.getWriter().write(workoutJSON);

        resp.setContentType("text/plain");
        String reset_password_contact_number = req.getParameter("reset_password_contact_number");
        System.out.println(reset_password_contact_number);

        ResetPassword reset_result = new ResetPassword();
        reset_result.setPhone_number(parseInt(reset_password_contact_number));

        try {
            ResetPassword resetDAO = ResetPasswordDAO.getContactDetails(reset_result);
            if(resetDAO == null){
                out.print("0");
            }else {
                out.print("1");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
