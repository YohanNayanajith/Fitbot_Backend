package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.MemberDAO;
import com.group39.fitbot.group39_fitbot.dao.MembershipDAO;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Member;
import com.group39.fitbot.group39_fitbot.model.Membership;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class MembershipController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Membership get method called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Membership post method called");

        PrintWriter out = resp.getWriter();
        HttpSession session = req.getSession();
//        String userName = (String) session.getAttribute("userName");
        String memberID = (String) session.getAttribute("MemberID");

//        System.out.println(memberID);

        try {
            Membership membership = MembershipDAO.membershipGetData(memberID);
//            session.setAttribute("MembershipID",membership.getMembership_id());
//            System.out.println(membership);
            Gson gson = new Gson();
            String memberJSON = gson.toJson(membership);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(memberJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
