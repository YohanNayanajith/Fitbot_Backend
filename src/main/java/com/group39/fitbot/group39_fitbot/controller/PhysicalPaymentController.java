package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class PhysicalPaymentController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment get method called");

        String merchant_id = req.getParameter("merchant_id");
        String order_id = req.getParameter("order_id");
        String payhere_amount = req.getParameter("payhere_amount");
        String status_code = req.getParameter("status_code");
        String md5sig = req.getParameter("md5sig");

        System.out.println(merchant_id+" "+order_id+" "+payhere_amount+" "+status_code+" "+md5sig);

//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Physical Member/FullSidebar.html");
//        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment Post method called");

        PrintWriter out = resp.getWriter();

        String merchant_id = req.getParameter("merchant_id");
        String order_id = req.getParameter("order_id");
        String payhere_amount = req.getParameter("payhere_amount");
        String status_code = req.getParameter("status_code");
        String md5sig = req.getParameter("md5sig");

        System.out.println(merchant_id+" "+order_id+" "+payhere_amount+" "+status_code+" "+md5sig);

        String merchant_secret = "8Rfx6YXbuds4OZr1HcPO6e8m1o8l4O6ET4ZHkIEBY0Op";

        out.println("1");
    }
}
