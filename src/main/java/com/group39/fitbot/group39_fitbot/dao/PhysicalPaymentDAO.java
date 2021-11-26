package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PhysicalPaymentDAO {
    public static boolean addPaymentDetails(PhysicalPayment physicalPayment) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
//        3- payment_method
//        7- authorization_token
//        8- payment_status
        String query = "INSERT INTO online_payment(payment_id,payment_date,previous_expire_date,currency,payment_amount,cus_first_name,cus_last_name,cus_address,cus_city,new_expire_date,alter_table_payment_id) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setInt(1,physicalPayment.getPayment_id());
        pst.setDate(2, Date.valueOf(physicalPayment.getPayment_date()));
//        pst.setString(3,physicalPayment.getPayment_method());
        pst.setDate(3, Date.valueOf(physicalPayment.getPrevious_expire_date()));
        pst.setString(4,physicalPayment.getCurrency());
        pst.setDouble(5,physicalPayment.getPayment_amount());
//        pst.setString(7,null); //Authorization token
//        pst.setString(8,"2"); //physicalPayment.getPayment_status()
        pst.setString(6,physicalPayment.getCus_first_name());
        pst.setString(7,physicalPayment.getCus_last_name());
        pst.setString(8,physicalPayment.getCus_address());
        pst.setString(9,physicalPayment.getCus_city());
        pst.setDate(10, Date.valueOf(physicalPayment.getNew_expire_date()));
        pst.setInt(11,physicalPayment.getAlter_table_payment_id());

        System.out.println("Payment added addPaymentDetails");

        return pst.executeUpdate() > 0;
    }

    public static boolean updateMembershipRenewalDetails(int membership_id,int renewal) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "UPDATE membership SET renewal=? WHERE membership_id=?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setInt(1,renewal);
        pst.setInt(2,membership_id);

        System.out.println("Payment added updateMembershipRenewalDetails");

        return pst.executeUpdate() > 0;
    }

    public static List<PhysicalPayment> retrivePaymentDetails(int alter_table_payment_id) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM online_payment WHERE alter_table_payment_id = ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setInt(1,alter_table_payment_id);

        ResultSet resultSet = pst.executeQuery();
        List<PhysicalPayment> physicalPaymentList = new ArrayList<>();
//        PhysicalPayment physicalPayment = new PhysicalPayment();

        while (resultSet.next()) {
            if (resultSet != null) {
                physicalPaymentList.add(
                        new PhysicalPayment(
                                resultSet.getInt(1),
                                resultSet.getDate(2).toLocalDate(),
                                resultSet.getString(3),
                                resultSet.getDate(4).toLocalDate(),
                                resultSet.getString(5),
                                resultSet.getDouble(6),
                                resultSet.getString(7),
                                resultSet.getString(8),
                                resultSet.getString(9),
                                resultSet.getString(10),
                                resultSet.getString(11),
                                resultSet.getString(12),
                                resultSet.getDate(13).toLocalDate(),
                                resultSet.getInt(14)
                        )
                );
            }
        }
        return physicalPaymentList;
    }
}
