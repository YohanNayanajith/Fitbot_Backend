package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.PasswordConfirmDAO;
import com.group39.fitbot.group39_fitbot.model.ResetPassword;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.obtainSHA;
import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.toHexStr;
import static java.lang.Integer.parseInt;

public class PasswordConfirmController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Password checker get method called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Password checker post method called");
        PrintWriter out = resp.getWriter();
//        resp.setCharacterEncoding("UTF-8");

        resp.setContentType("text/plain");
        String new_password = req.getParameter("craete_new_password_forget_password");
        String new_confirm_password = req.getParameter("confirm_new_password_forget_password");
        int phone_number = parseInt(req.getParameter("phone_number"));
        System.out.println(new_password);

        if(new_password == new_confirm_password){
            out.print("0");
        }
        try {
            new_password = toHexStr(obtainSHA(new_password));
            new_confirm_password = toHexStr(obtainSHA(new_confirm_password));

            ResetPassword reset = new ResetPassword();
            reset.setPassword(new_password);
            reset.setConfirm_password(new_confirm_password);
            reset.setPhone_number(phone_number);

            boolean isSuccess = PasswordConfirmDAO.setNewPassword(reset);

            if(isSuccess){
                out.print("1");
            }else{
                out.print("0");
            }
        } catch (NoSuchAlgorithmException | ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

    }
}
