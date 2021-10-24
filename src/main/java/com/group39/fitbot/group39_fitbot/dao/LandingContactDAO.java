package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.LandingContact;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class LandingContactDAO {

    public static boolean addContact(LandingContact landingContact) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query ="INSERT INTO contact VALUES(?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);


        pst.setString(1, landingContact.getV_name());
        pst.setString(2, landingContact.getV_email());
        pst.setString(3, landingContact.getV_contact());
        pst.setString(4, landingContact.getV_message());

        System.out.println("");
        return pst.executeUpdate()>0;
    }

}
