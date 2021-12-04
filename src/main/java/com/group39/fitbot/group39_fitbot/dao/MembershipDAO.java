package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Membership;

import java.sql.*;

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
            membership.setExpiry_day(resultSet2.getDate(4).toLocalDate());
            membership.setRenewal(resultSet2.getInt(5));
            membership.setMembership_payment_date(resultSet2.getDate(6).toLocalDate());
            membership.setHas_instructor(resultSet2.getString(7));
            membership.setInstructor_price(resultSet2.getInt(8));
            membership.setDiscount_price(resultSet2.getInt(9));

//            System.out.println(membership);
            return membership;
        }else {
            return null;
        }
    }

    public static boolean membershipInsertData(Membership membership) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO membership VALUES(?,?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setInt(1,membership.getMembership_id());
        pst.setInt(2,membership.getMembership_fee());
        pst.setString(3,membership.getMembership_category());
        pst.setDate(4, Date.valueOf(membership.getExpiry_day()));
        pst.setInt(5,membership.getRenewal());
        pst.setDate(6, Date.valueOf(membership.getMembership_payment_date()));
        pst.setString(7,membership.getHas_instructor());
        pst.setInt(8,membership.getInstructor_price());
        pst.setInt(9,membership.getDiscount_price());

        return pst.executeUpdate() > 0;
    }

    public static boolean membershipAlterTableInsertData(String member_id,int payment_id, int membership_id) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO payment_paidmember_membership VALUES(?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setInt(1,payment_id);
        pst.setInt(2,membership_id);
        pst.setString(3,member_id);
        return pst.executeUpdate() > 0;
    }
}
