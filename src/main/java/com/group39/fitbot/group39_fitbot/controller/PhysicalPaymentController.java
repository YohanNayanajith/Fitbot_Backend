package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.MembershipDAO;
import com.group39.fitbot.group39_fitbot.dao.PhysicalPaymentDAO;
import com.group39.fitbot.group39_fitbot.model.PhysicalPayment;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.Objects;

import static java.lang.Integer.parseInt;

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
        resp.setContentType("text/plain");

        System.out.println("Payment 0");
        String merchant_id = req.getParameter("merchant_id");
//        String order_id = req.getParameter("order_id");
        double payhere_amount = Double.parseDouble(req.getParameter("amount"));
        String payhere_currency = req.getParameter("currency");

        System.out.println("Payment 01");
//        String status_code = req.getParameter("status_code");
//        String md5sig = req.getParameter("md5sig");
//        String status_message = req.getParameter("status_message");
//        String authorization_token = req.getParameter("authorization_token");
        String cancel_url = req.getParameter("cancel_url");
        String notify_url = req.getParameter("notify_url");
        String return_url = req.getParameter("return_url");
        String order_id = req.getParameter("order_id");
        String phone = req.getParameter("phone");
        String items = req.getParameter("items");

        System.out.println("Payment 1");

        //payment details
        int payment_id = parseInt(req.getParameter("payment_id"));
        String cus_first_name = req.getParameter("first_name");
        String cus_last_name = req.getParameter("last_name");
        String cus_address = req.getParameter("address");
        String cus_city = req.getParameter("city");
        String country = req.getParameter("country");
        LocalDate new_expire_date = LocalDate.parse(req.getParameter("new_expire_date"));
        LocalDate current_date = LocalDate.parse(req.getParameter("current_date"));
//        LocalDate payment_date = LocalDate.parse(req.getParameter("payment_date"));

//        System.out.println(merchant_id+" "+order_id+" "+payhere_amount+" "+status_code+" "+md5sig);

//        String merchant_secret = "4UtzoQHR7Lu4OUfoB2eiT34Uop6X9fWJY4JJgy9IpX19";

        System.out.println("Payment 2");

        PhysicalPayment physicalPayment = new PhysicalPayment();
        physicalPayment.setPayment_id(payment_id);
//        physicalPayment.setPayment_date(payment_date);
        physicalPayment.setPrevious_expire_date(current_date);
        physicalPayment.setCurrency(payhere_currency);
        physicalPayment.setPayment_amount(payhere_amount);
//        physicalPayment.setAuthorization_token(authorization_token);
//        physicalPayment.setPayment_status(status_code);
        physicalPayment.setCus_first_name(cus_first_name);
        physicalPayment.setCus_last_name(cus_last_name);
        physicalPayment.setCus_address(cus_address);
        physicalPayment.setCus_city(cus_city);
        physicalPayment.setNew_expire_date(new_expire_date);

        System.out.println("Payment 3");

        HttpSession session = req.getSession();
//        String MembershipID = (String) session.getAttribute("MembershipID");
        String memberID = (String) session.getAttribute("MemberID");
        char[] ch = memberID.toCharArray();
        String membershipID = "";
        int i = 0;
        for (char c : ch) {
//            int p1 = Character.compare(c, 'P');
//            int p2 = Character.compare(c, 'h');
//            int p3 = Character.compare(c, 'y');
            if(i>=3){
                membershipID += c;
            }
            i++;
        }
        System.out.println("Payment run");
        System.out.println(membershipID);
        System.out.println(physicalPayment);
//        int membershipIDNew = parseInt(membershipID);
        try {
            boolean b = PhysicalPaymentDAO.addPaymentDetails(physicalPayment);
            boolean b1 = PhysicalPaymentDAO.updateMembershipRenewalDetails(parseInt(membershipID), 0);
            boolean b2 = MembershipDAO.membershipAlterTableInsertData(memberID, parseInt(membershipID), payment_id);

            if(b && (b1 && b2)){
                System.out.println("Payment added");
                out.println("1");
            }else {
                System.out.println("Payment not added");
                out.println("0");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
