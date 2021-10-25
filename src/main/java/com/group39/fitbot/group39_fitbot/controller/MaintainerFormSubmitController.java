package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.MaintainerUpdateDAO;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.SQLException;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

public class MaintainerFormSubmitController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Maintainer/FullSidebar.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");
//        System.out.println("in mt onr thana**********************");

        int form_id_m = 1;
//        int form_id_m = Integer.parseInt(req.getParameter("form_id_m"));
        String complet_dis = req.getParameter("complet_dis");
        String complet_img = req.getParameter("complet_img");
        String comp_date = req.getParameter("comp_date");
        String comp_time = req.getParameter("comp_time");

//
//        System.out.println(form_id_m);
//        System.out.println(complet_dis);
//        System.out.println(complet_img);
//        System.out.println(comp_date);
//        System.out.println(comp_time);


        boolean updateResult= false;

        try {

            updateResult = MaintainerUpdateDAO.updateForm(new FormMaintain(
                    form_id_m,
                    complet_dis,
                    complet_img,
                    comp_date,
                    comp_time
            ));


        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        if(updateResult){
            System.out.println("Update database");
            out.print("1");
        }else {
            System.out.println("Not add");
            out.print("0");
        }


//        String formMaintainJSON = gson.toJson(update_form);
//        resp.setContentType("application/json");
//        resp.setCharacterEncoding("UTF-8");
//        resp.getWriter().write(formMaintain);

    }
}
