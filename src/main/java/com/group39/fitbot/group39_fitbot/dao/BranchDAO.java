package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Branch;
import com.group39.fitbot.group39_fitbot.model.Employee;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BranchDAO {
    public static List<Branch> getBranch() throws SQLException ,ClassNotFoundException {
        List<Branch> branches = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " SELECT * FROM BRANCH";
        PreparedStatement pst = connection.prepareStatement(query);

        ResultSet resultSet = pst.executeQuery();

        while(resultSet.next()){
            if(resultSet!=null)
            {
                branches.add(new Branch(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getDate(5).toLocalDate(),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8)
                        ));

            }
        }
        return branches;
    }

    public static List<Branch> getBranchdetails(String branchname) throws SQLException ,ClassNotFoundException {
        List<Branch> branches = new ArrayList<>();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " SELECT * FROM BRANCH where branch_id=?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1,branchname);
        ResultSet resultSet = pst.executeQuery();


        while(resultSet.next()){
            if(resultSet!=null)
            {
                branches.add(new Branch(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getDate(5).toLocalDate(),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8)
                ));

            }
        }
        return branches;
    }
}
