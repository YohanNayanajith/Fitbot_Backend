package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.PhysicalPaymentDAO;
import com.group39.fitbot.group39_fitbot.model.PhysicalPayment;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.parseInt;

public class PaymentDetailsController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment details get method called");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment details post method called");

        HttpSession session = req.getSession();
        String memberID = (String) session.getAttribute("MemberID");
        char[] ch = memberID.toCharArray();
        String alter_table_payment_id = "";
        int i = 0;
        for (char c : ch) {
            if(i>=3){
                alter_table_payment_id += c;
            }
            i++;
        }
        System.out.println(alter_table_payment_id);
        List<PhysicalPayment> physicalPaymentList = new ArrayList<>();
        try {
            physicalPaymentList = PhysicalPaymentDAO.retrivePaymentDetails(parseInt(alter_table_payment_id));
            System.out.println(physicalPaymentList);
            Gson gson = new Gson();
            String paymentJSON = gson.toJson(physicalPaymentList);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(paymentJSON);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
