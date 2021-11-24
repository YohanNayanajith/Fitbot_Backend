package com.group39.fitbot.group39_fitbot.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

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
        String payhere_currency = req.getParameter("payhere_currency");
        String status_code = req.getParameter("status_code");
        String md5sig = req.getParameter("md5sig");
        String status_message = req.getParameter("status_message");
        String authorization_token = req.getParameter("authorization_token");

        System.out.println(merchant_id+" "+order_id+" "+payhere_amount+" "+status_code+" "+md5sig);

        String merchant_secret = "4UtzoQHR7Lu4OUfoB2eiT34Uop6X9fWJY4JJgy9IpX19";

        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
//            md5.update(value.getBytes("UTF-8"));
//            String local_md5sig = toUpperCase(md5 ( merchant_id . order_id . payhere_amount . payhere_currency . status_code . toUpperCase(md5(merchant_secret)) ) );
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }




        out.println("1");
    }
}
