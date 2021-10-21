package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Membership;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MembershipDAO {
    public static Membership membershipGetData(String memberID) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT membership_id,payment_id FROM payment_paidmember_membership WHERE member_id = ?";

        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,memberID);

        ResultSet resultSet = pst.executeQuery();

        int membership_id,payment_id;
        if(resultSet.next()){
            membership_id = resultSet.getInt(1);
            payment_id = resultSet.getInt(2);

            System.out.println(membership_id);

        }else {
            return null;
        }
        String query2 = "SELECT * FROM membership WHERE membership_id = ?";

        PreparedStatement pst2 = connection.prepareStatement(query2);
        pst2.setInt(1,membership_id);

        ResultSet resultSet2 = pst2.executeQuery();

        Membership membership = new Membership();

        if(resultSet2.next()){
            membership.setMembership_id(resultSet2.getInt(1));
            membership.setMembership_fee(resultSet2.getInt(2));
            membership.setMembership_category(resultSet2.getString(3));
            membership.setExpiry_day(resultSet2.getDate(4));
            membership.setRenewal(resultSet2.getInt(5));
            membership.setMembership_payment_date(resultSet2.getDate(6));
            membership.setHas_instructor(resultSet2.getString(7));
            membership.setInstructor_price(resultSet2.getInt(8));
            membership.setDiscount_price(resultSet2.getInt(9));

            System.out.println(membership);
            return membership;
        }else {
            return null;
        }
    }
}
