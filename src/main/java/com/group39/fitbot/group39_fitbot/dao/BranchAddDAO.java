package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Branch;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BranchAddDAO {
    public static boolean AddBranch (Branch branch) throws SQLException, ClassNotFoundException {
        Connection connection= DBConnection.getInstance().getConnection();
        String query = "INSERT INTO branch VALUES (?,?,?,?,?,?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,branch.getBranch_id());
        pst.setString(2, branch.getBranch_name());
        pst.setString(3, branch.getBranch_address());
        pst.setString(4, branch.getBranch_email());
        pst.setDate(5, Date.valueOf(branch.getBranch_date_of_commencement()));
        pst.setString(6, branch.getBranch_primary_contact());
        pst.setString(7, branch.getBranch_secondary_contact());
        pst.setString(8, branch.getBranch_image());

        return pst.executeUpdate()>0;
    }
}
