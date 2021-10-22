package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MaintainerStatusChangeController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("get method in status change call");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("post method in status change call");

        Integer form_id= Integer.valueOf(req.getParameter("form_id"));
        System.out.println(form_id);
        resp.setContentType("text/plain");






    }
}
