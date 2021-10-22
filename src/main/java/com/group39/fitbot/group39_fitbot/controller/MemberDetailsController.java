package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.EditProfileDAO;
import com.group39.fitbot.group39_fitbot.dao.WorkoutDAO;
import com.group39.fitbot.group39_fitbot.model.Registartion;
import com.group39.fitbot.group39_fitbot.model.Workout;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemberDetailsController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("member details get method");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("member details post method");

        HttpSession session = req.getSession();
        String memberID = (String) session.getAttribute("MemberID");

        Registartion registartion = new Registartion();
//        registartion.setMember_id(memberID);
        try {
            registartion = EditProfileDAO.retriveRegistration(memberID);
            System.out.println(registartion);
            Gson gson = new Gson();
            String registerJSON = gson.toJson(registartion);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(registerJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
