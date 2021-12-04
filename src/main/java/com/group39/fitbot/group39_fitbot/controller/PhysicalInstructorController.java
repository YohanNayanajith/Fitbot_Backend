package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.PhysicalInstructorDAO;
import com.group39.fitbot.group39_fitbot.dao.WorkoutDAO;
import com.group39.fitbot.group39_fitbot.model.PhysicalInstructor;
import com.group39.fitbot.group39_fitbot.model.Workout;

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

public class PhysicalInstructorController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Physical Instructor Called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Physical Instructor post Method called");

        PrintWriter out = resp.getWriter();
        HttpSession session = req.getSession();
        String userName = (String) session.getAttribute("userName");
        String memberID = (String) session.getAttribute("MemberID");
        String memberType = (String) session.getAttribute("userType");

        List<PhysicalInstructor> physicalInstructorList = new ArrayList<>();
//        all_workouts = WorkoutDAO.getWorkout();

        PhysicalInstructor physicalInstructor = null;
        try {
            physicalInstructorList = PhysicalInstructorDAO.physicalInstructorGetData();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        System.out.println(physicalInstructorList);

        Gson gson = new Gson();
        String physicalInstructorJSON = gson.toJson(physicalInstructorList);
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(physicalInstructorJSON);
    }
}
