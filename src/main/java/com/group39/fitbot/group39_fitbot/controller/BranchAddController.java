package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.BranchAddDAO;
import com.group39.fitbot.group39_fitbot.model.Branch;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDate;


public class BranchAddController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Branchadd get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Admin/AddEmployees/branch_add.html");
        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Branch Add Post Method Called");
        PrintWriter out = resp.getWriter();


        String branch_id = req.getParameter("branch_id");
        String branch_name = req.getParameter("branch_name");
        String branch_address = req.getParameter("branch_address");
        String branch_email = req.getParameter("branch_email");
        LocalDate branch_date_of_commencement = LocalDate.now();
        String branch_primary = req.getParameter("contactno1_branch");
        String branch_secondary = req.getParameter("contactno2_branch");
        String branch_image = req.getParameter("branch_pic");

        boolean added = false;
        resp.setContentType("text/plain");

        try {
            added = BranchAddDAO.AddBranch(new Branch(
                    branch_id,
                    branch_name,
                    branch_address,
                    branch_email,
                    branch_date_of_commencement,
                    branch_primary,
                    branch_secondary,
                    branch_image

                    ));


        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if (added) {
            System.out.println("added");
            out.println(1);

        } else {
            System.out.println("not added");
            out.println(0);
        }
    }
}
