package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.EditProfileDAO;
import com.group39.fitbot.group39_fitbot.dao.LoginDAO;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDate;

public class EditPasswordController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("edit profile Get method called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("edit profile Post method called");

        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");
        String edit_profile_container_detail_name = req.getParameter("edit_profile_container_detail_name");
        String edit_profile_container_detail_last_name = req.getParameter("edit_profile_container_detail_last_name");
        int edit_profile_container_detail_weight = Integer.parseInt(req.getParameter("edit_profile_container_detail_weight"));
        int edit_profile_container_detail_last_height = Integer.parseInt(req.getParameter("edit_profile_container_detail_last_height"));
        LocalDate edit_profile_container_detail_dob = LocalDate.parse(req.getParameter("edit_profile_container_detail_dob"));
        int edit_profile_container_detail_last_conatct = Integer.parseInt(req.getParameter("edit_profile_container_detail_last_conatct"));

        System.out.println(edit_profile_container_detail_name);
        System.out.println(edit_profile_container_detail_last_name);

        HttpSession session = req.getSession();
        String memberID = (String) session.getAttribute("MemberID");

        Registartion registartion = new Registartion();
        registartion.setMember_id(memberID);

        registartion.setFirst_name(edit_profile_container_detail_name);
        registartion.setLast_name(edit_profile_container_detail_last_name);
        registartion.setWeight(edit_profile_container_detail_weight);
        registartion.setHeight(edit_profile_container_detail_last_height);
        registartion.setDate_of_birth(edit_profile_container_detail_dob);
        registartion.setContact_number(edit_profile_container_detail_last_conatct);

        System.out.println(registartion);

        boolean accept;
        boolean accept_new;
        try {
            accept = EditProfileDAO.updateMemberDetails(registartion);
            accept_new = EditProfileDAO.updateLoginDetails(registartion);

            if(accept && accept_new){
                out.print("1");
            }else {
                out.print("0");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
}
