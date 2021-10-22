package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.HelloServlet;
import com.group39.fitbot.group39_fitbot.dao.NoticeDAO;
import com.group39.fitbot.group39_fitbot.model.Notice;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class NoticeManagerController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("notice get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Manager/BRANCH_MANAGER_NOTICES/MANAGER_NOTICES.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String notice_no = req.getParameter("notice_no");
        String title = req.getParameter("title");
        String description = req.getParameter("description");
        System.out.println(notice_no + " "+ title + " "+ description);

        boolean added = false;

        try {
            added = NoticeDAO.addNotice( new Notice(
                    notice_no,
                    title,
                    description
            ));
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }


        if (added){
            System.out.println("added");
        }else {
            System.out.println("not added");
        }



    }
}
