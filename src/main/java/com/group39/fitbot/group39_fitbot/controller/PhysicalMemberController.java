package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.MemberDAO;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Member;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class PhysicalMemberController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Physical Member get method called");
//        session.getAttribute("userName");

        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Physical Member/FullSidebar.html");
        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Physical Member/FullSidebar.html");
//        requestDispatcher.forward(req, resp);
        PrintWriter out = resp.getWriter();
        System.out.println("Physical Member post method called");
        HttpSession session = req.getSession();
        String userName = (String) session.getAttribute("userName");
        String memberID = (String) session.getAttribute("MemberID");
        String memberType = (String) session.getAttribute("userType");

        Login login = new Login();
        login.setMember_id(memberID);
        login.setUser_name(userName);
        login.setUserType(memberType);
//        System.out.println(userName);

        try {
            Member member = MemberDAO.retriveMember(login);
            Gson gson = new Gson();
            String memberJSON = gson.toJson(member);
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
