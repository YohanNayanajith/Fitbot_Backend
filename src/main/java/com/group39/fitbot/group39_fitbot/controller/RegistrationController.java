package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.GetMemberCountDAO;
import com.group39.fitbot.group39_fitbot.dao.MembershipDAO;
import com.group39.fitbot.group39_fitbot.dao.RegistartionDAO;
import com.group39.fitbot.group39_fitbot.model.Membership;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;

import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.obtainSHA;
import static com.group39.fitbot.group39_fitbot.controller.PasswordHashingController.toHexStr;
import static java.lang.Integer.parseInt;

public class RegistrationController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Registartion get contoller called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/RegistrationForm/Registration.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Registartion post contoller called");
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");


        String first_name = req.getParameter("first_name");
        String last_name = req.getParameter("last_name");
        LocalDate dob = LocalDate.parse(req.getParameter("date_of_birth"));
        String email = req.getParameter("email");
        int phone_number = Integer.parseInt(req.getParameter("phone_number"));
        String address = req.getParameter("address");
        String selected_country = req.getParameter("selected_country");
        String gender = req.getParameter("gender");
        String reg_password = req.getParameter("reg_password");
        String confirm_password = req.getParameter("confirm_password");
        String membership_type = req.getParameter("membership_type");
        String membership_category = req.getParameter("membership_category");
        int height = Integer.parseInt(req.getParameter("height"));
        int weight = Integer.parseInt(req.getParameter("weight"));
        String branch_type = req.getParameter("branch_type");
        LocalDate fullDate = LocalDate.parse(req.getParameter("fullDate"));
        LocalDate new_expire_date = LocalDate.parse(req.getParameter("new_expire_date"));

        String member_id = null;
        int payment_id = 0;
        int membership_id = 0;

        int renewal = checkMembershipFee(membership_category);
        System.out.println("Renewal "+renewal);

        String has_instructor = "0";
        int instructor_price = 0;
        int discount_price = 0;

        try {
            int memberCount = GetMemberCountDAO.getMemberCount();
//            System.out.println(memberCount);
            member_id = "Phy"+(memberCount+1);
            payment_id = memberCount+1;
            membership_id = memberCount+1;

            System.out.println(member_id);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        //password hashed - SHA256
        boolean added1 = false;
        boolean added2 = false;
        boolean added3 = false;

        try {
            reg_password = toHexStr(obtainSHA(reg_password));
            confirm_password = toHexStr(obtainSHA(confirm_password));
            added1 = RegistartionDAO.addRegistration(new Registartion(
                            first_name,
                            last_name,
                            dob,
                            phone_number,
                            address,
                            selected_country,
                            gender,
                            reg_password,
                            confirm_password,
                            membership_type,
                            membership_category,
                            height,
                            weight,
                            member_id,
                            email,
                            branch_type
                    )

            );

            added2 = RegistartionDAO.addRegistrationToUserTable(new Registartion(
                            first_name,
                            last_name,
                            dob,
                            phone_number,
                            address,
                            selected_country,
                            gender,
                            reg_password,
                            confirm_password,
                            membership_type,
                            membership_category,
                            height,
                            weight,
                            member_id,
                            email,
                            branch_type
                    )

            );

            added3 = MembershipDAO.membershipInsertData(new Membership(
                    membership_id,
                    renewal,
                    membership_category,
                    new_expire_date,
                    renewal,
                    fullDate,
                    has_instructor,
                    instructor_price,
                    discount_price
            ));

            boolean added4 = MembershipDAO.membershipAlterTableInsertData(member_id, membership_id, payment_id);

            HttpSession session = req.getSession(true);
            session.setAttribute("MemberID",member_id);
//            session.setAttribute("payment_id",member_id);
//            session.setAttribute("membership_id",member_id);

//            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");

            if((added1 && added2) && added3 && added4){
                System.out.println("Added");
//            req.setAttribute("message","Successfully added");
                out.print("1");
//                resp.getWriter().write("1");

            }else{
                System.out.println("Not added");
//            req.setAttribute("message","Not Added");
                out.print("0");
            }

        } catch (SQLException | NoSuchAlgorithmException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }

//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("medical");
//        requestDispatcher.forward(req, resp);
    }

    private int checkMembershipFee(String membership_category){
        if(Objects.equals(membership_category, "family_membership")){
            return 12000;
        }else if(Objects.equals(membership_category, "couple_membership")){
            return 10000;
        }else if(Objects.equals(membership_category, "platinum_membership")){
            return 8000;
        }else if(Objects.equals(membership_category, "gold_membership")){
            return 5000;
        }else if(Objects.equals(membership_category, "silver_membership")){
            return 2500;
        }else {
            return 0;
        }
    }
}
