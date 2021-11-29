package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.PhysicalMemberMessageDAO;
import com.group39.fitbot.group39_fitbot.model.PhysicalInstructor;
import com.group39.fitbot.group39_fitbot.model.PhysicalMemberMessage;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

///physicalMember/Message
public class PhysicalMemberMessagesController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("message get method");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("message post method");

        PrintWriter out = resp.getWriter();

        String instructor_id = req.getParameter("instructor_id");

        HttpSession session = req.getSession();
        String memberID = (String) session.getAttribute("MemberID");

        List<PhysicalMemberMessage> physicalMemberMessage = new ArrayList<>();

        try {
            physicalMemberMessage = PhysicalMemberMessageDAO.retriveMessageDetailsSenderMember(instructor_id,memberID);
            Gson gson = new Gson();
            String messageJSON = gson.toJson(physicalMemberMessage);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(messageJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
