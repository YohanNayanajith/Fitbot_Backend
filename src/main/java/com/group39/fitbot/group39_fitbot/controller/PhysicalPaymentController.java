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
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import static java.lang.Integer.parseInt;

public class PhysicalPaymentController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment get method called");

//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Physical Member/FullSidebar.html");
//        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Payment Post method called");
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");

        System.out.println("Payment 0");

        String payment_id = req.getParameter("payment_id");
        LocalDate payment_date = LocalDate.parse(req.getParameter("payment_date"));
        LocalDate previous_expire_date = LocalDate.parse(req.getParameter("previous_expire_date"));
        System.out.println("Payment 001");
        String payhere_currency = req.getParameter("currency");
        double payhere_amount = Double.parseDouble(req.getParameter("payment_amount"));
        System.out.println("Payment 01");
        String cus_first_name = req.getParameter("cus_first_name");
        String cus_last_name = req.getParameter("cus_last_name");
        String cus_address = req.getParameter("cus_address");
        String cus_city = req.getParameter("cus_city");
        LocalDate new_expire_date = LocalDate.parse(req.getParameter("new_expire_date"));

        System.out.println("Payment 1");
//        System.out.println(merchant_id+" "+order_id+" "+payhere_amount+" "+status_code+" "+md5sig);
//        String merchant_secret = "4UtzoQHR7Lu4OUfoB2eiT34Uop6X9fWJY4JJgy9IpX19";

        HttpSession session = req.getSession();
//        String MembershipID = (String) session.getAttribute("MembershipID");
        String memberID = (String) session.getAttribute("MemberID");
        char[] ch = memberID.toCharArray();
        String membershipID = "";
        String alter_table_payment_id = "";
        int i = 0;
        for (char c : ch) {
            if(i>=3){
                membershipID += c;
                alter_table_payment_id += c;
            }
            i++;
        }
        System.out.println("Payment run");
        System.out.println(membershipID);

        System.out.println("Payment 2");

        PhysicalPayment physicalPayment = new PhysicalPayment();
        physicalPayment.setPayment_id(parseInt(payment_id));
        physicalPayment.setPayment_date(payment_date);
        physicalPayment.setPrevious_expire_date(previous_expire_date);
        physicalPayment.setCurrency(payhere_currency);
        physicalPayment.setPayment_amount(payhere_amount);
//        physicalPayment.setAuthorization_token(authorization_token);
//        physicalPayment.setPayment_status(status_code);
        physicalPayment.setCus_first_name(cus_first_name);
        physicalPayment.setCus_last_name(cus_last_name);
        physicalPayment.setCus_address(cus_address);
        physicalPayment.setCus_city(cus_city);
        physicalPayment.setNew_expire_date(new_expire_date);
        physicalPayment.setAlter_table_payment_id(parseInt(alter_table_payment_id));
        System.out.println(physicalPayment);


        try {
            boolean b = PhysicalPaymentDAO.addPaymentDetails(physicalPayment);
            boolean b1 = PhysicalPaymentDAO.updateMembershipRenewalDetails(parseInt(membershipID), 0);
//            boolean b2 = MembershipDAO.membershipAlterTableInsertData(memberID, parseInt(membershipID), parseInt(payment_id));
            System.out.println("Payment 3");
            resp.setCharacterEncoding("UTF-8");
            if(b && b1){
                System.out.println("Payment added");
                out.print("1");
            }else {
                System.out.println("Payment not added");
                out.print("0");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
