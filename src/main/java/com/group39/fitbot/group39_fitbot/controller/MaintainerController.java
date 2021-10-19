package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.MaintainFormDAO;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MaintainerController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Maintainer/FullSidebar.html");
        requestDispatcher.forward(req,resp);


        System.out.println("get method call");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("post method call");

        FormMaintain formMaintain=new FormMaintain();



        try {
            List<FormMaintain> all_form = new ArrayList<>();
            all_form = MaintainFormDAO.getFormMaintain();
            System.out.println(all_form);
            Gson gson = new Gson();
            String formJSON = gson.toJson(all_form);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(formJSON);

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        }
    }

