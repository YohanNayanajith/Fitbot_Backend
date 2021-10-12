package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Member;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MemberDAO {
    public static Member retriveMember(Login login) throws SQLException, ClassNotFoundException {
        Member member = new Member();

        Connection connection = DBConnection.getInstance().getConnection();
//        String query = "SELECT * FROM member WHERE member_id= ?";
        String query = "SELECT * FROM member WHERE member_id = ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,login.getMember_id());

        ResultSet resultSet = pst.executeQuery();

        if(resultSet.next()){
            member.setMember_id(resultSet.getString(1));
            member.setFirst_name(resultSet.getString(2));
            member.setLast_name(resultSet.getString(3));
            member.setEmail(resultSet.getString(4));
            member.setNic(resultSet.getString(5));
            member.setDob(resultSet.getDate(6));
            member.setGender(resultSet.getString(7));
            member.setInstructor_id(resultSet.getString(8));
            return member;
        }else {
            return null;
        }
    }
}
