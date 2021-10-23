package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.MedicalForm;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MedicalFormDAO {

    public static boolean insertMedicalData(MedicalForm medicalForm) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO register_medical VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,medicalForm.getMember_id());
        pst.setString(2, medicalForm.getMedical_first_question1());
        pst.setString(3, medicalForm.getMedical_first_question2());
        pst.setString(4, medicalForm.getMedical_first_question3());
        pst.setString(5, medicalForm.getMedical_first_question4());
        pst.setString(6, medicalForm.getMedical_first_question5());
        pst.setString(7, medicalForm.getMedical_first_question6());
        pst.setString(8, medicalForm.getMedical_first_question7());
        pst.setString(9, medicalForm.getMedical_first_question8());
        pst.setString(10, medicalForm.getMedical_first_question9());
        pst.setString(11, medicalForm.getMedical_first_question10());
        pst.setString(12, medicalForm.getMedical_first_question11());
        pst.setString(13, medicalForm.getMedical_first_question12());
        pst.setString(14, medicalForm.getMedical_first_question13());
        pst.setString(15, medicalForm.getMedical_first_question14());

        pst.setString(16, medicalForm.getMedical_second_question1());
        pst.setString(17, medicalForm.getMedical_second_question2());
        pst.setString(18, medicalForm.getMedical_second_question3());
        pst.setString(19, medicalForm.getMedical_second_question4());
        pst.setString(20, medicalForm.getMedical_second_question5());
        pst.setString(21, medicalForm.getMedical_second_question6());

        pst.setString(22, medicalForm.getMedical_third_question());
        pst.setString(23, medicalForm.getMedical_fourth_question());
        pst.setString(24, medicalForm.getMedical_fifth_question());
        pst.setString(25, medicalForm.getMedical_six_question());

        System.out.println("Medical Form DAO");
        return pst.executeUpdate() > 0;
    }
}
