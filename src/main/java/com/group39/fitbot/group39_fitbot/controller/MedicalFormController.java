package com.group39.fitbot.group39_fitbot.controller;

import com.group39.fitbot.group39_fitbot.dao.MedicalFormDAO;
import com.group39.fitbot.group39_fitbot.model.MedicalForm;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDate;

public class MedicalFormController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Medical form controller is called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/MedicalForm/MedicalForm.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Medical Form post method called");
//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/MedicalForm/MedicalForm.html");
//        requestDispatcher.forward(req,resp);
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");

        HttpSession session = req.getSession();
        String memberID = (String) session.getAttribute("MemberID");

        if(memberID == null){
            out.print("2");
            return;
        }

        String medical_first_question1 = req.getParameter("medical_first_question1");
        String medical_first_question2 = req.getParameter("medical_first_question2");
        String medical_first_question3 = req.getParameter("medical_first_question3");
        String medical_first_question4 = req.getParameter("medical_first_question4");
        String medical_first_question5 = req.getParameter("medical_first_question5");
        String medical_first_question6 = req.getParameter("medical_first_question6");
        String medical_first_question7 = req.getParameter("medical_first_question7");
        String medical_first_question8 = req.getParameter("medical_first_question8");
        String medical_first_question9 = req.getParameter("medical_first_question9");
        String medical_first_question10 = req.getParameter("medical_first_question10");
        String medical_first_question11 = req.getParameter("medical_first_question11");
        String medical_first_question12 = req.getParameter("medical_first_question12");
        String medical_first_question13 = req.getParameter("medical_first_question13");
        String medical_first_question14 = req.getParameter("medical_first_question14");

        String medical_second_question1 = req.getParameter("medical_second_question1");
        String medical_second_question2 = req.getParameter("medical_second_question2");
        String medical_second_question3 = req.getParameter("medical_second_question3");
        String medical_second_question4 = req.getParameter("medical_second_question4");
        String medical_second_question5 = req.getParameter("medical_second_question5");
        String medical_second_question6 = req.getParameter("medical_second_question6");

        String medical_third_question = req.getParameter("medical_third_question");
        String medical_fourth_question = req.getParameter("medical_fourth_question");
        String medical_fifth_question = req.getParameter("medical_fifth_question");
        String medical_six_question = req.getParameter("medical_six_question");

        MedicalForm medicalForm = new MedicalForm();

        medicalForm.setMember_id(memberID);
        medicalForm.setMedical_first_question1(medical_first_question1);
        medicalForm.setMedical_first_question2(medical_first_question2);
        medicalForm.setMedical_first_question3(medical_first_question3);
        medicalForm.setMedical_first_question4(medical_first_question4);
        medicalForm.setMedical_first_question5(medical_first_question5);
        medicalForm.setMedical_first_question6(medical_first_question6);
        medicalForm.setMedical_first_question7(medical_first_question7);
        medicalForm.setMedical_first_question8(medical_first_question8);
        medicalForm.setMedical_first_question9(medical_first_question9);
        medicalForm.setMedical_first_question10(medical_first_question10);
        medicalForm.setMedical_first_question11(medical_first_question11);
        medicalForm.setMedical_first_question12(medical_first_question12);
        medicalForm.setMedical_first_question13(medical_first_question13);
        medicalForm.setMedical_first_question14(medical_first_question14);

        medicalForm.setMedical_second_question1(medical_second_question1);
        medicalForm.setMedical_second_question2(medical_second_question2);
        medicalForm.setMedical_second_question3(medical_second_question3);
        medicalForm.setMedical_second_question4(medical_second_question4);
        medicalForm.setMedical_second_question5(medical_second_question5);
        medicalForm.setMedical_second_question6(medical_second_question6);

        medicalForm.setMedical_third_question(medical_third_question);
        medicalForm.setMedical_fourth_question(medical_fourth_question);
        medicalForm.setMedical_fifth_question(medical_fifth_question);
        medicalForm.setMedical_six_question(medical_six_question);

        boolean added;
        try {
            added = MedicalFormDAO.insertMedicalData(medicalForm);
            if(added){
                System.out.println("Medical data added");
                out.print("1");
            }else {
                System.out.println("Medical data not added");
                out.print("0");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
