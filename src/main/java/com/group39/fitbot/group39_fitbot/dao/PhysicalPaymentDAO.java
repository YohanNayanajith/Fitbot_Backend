package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.PhysicalPayment;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class PhysicalPaymentDAO {
    public static boolean addPaymentDetails(PhysicalPayment physicalPayment) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO online_payment VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setInt(1,physicalPayment.getPayment_id());
        pst.setDate(2, Date.valueOf(physicalPayment.getPayment_date()));
        pst.setString(3,physicalPayment.getPayment_method());
        pst.setDate(4, Date.valueOf(physicalPayment.getPrevious_expire_date()));
        pst.setString(5,physicalPayment.getCurrency());
        pst.setDouble(6,physicalPayment.getPayment_amount());
        pst.setString(7,null); //Authorization token
        pst.setString(8,"2"); //physicalPayment.getPayment_status()
        pst.setString(9,physicalPayment.getCus_first_name());
        pst.setString(10,physicalPayment.getCus_last_name());
        pst.setString(11,physicalPayment.getCus_address());
        pst.setString(12,physicalPayment.getCus_city());
        pst.setDate(13, Date.valueOf(physicalPayment.getNew_expire_date()));

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
}
