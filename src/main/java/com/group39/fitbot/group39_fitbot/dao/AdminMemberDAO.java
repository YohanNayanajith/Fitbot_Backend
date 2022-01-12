package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.AdminMember;
import com.group39.fitbot.group39_fitbot.model.Employee;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AdminMemberDAO {
    public static List<AdminMember> getMember() throws SQLException, ClassNotFoundException{
        List<AdminMember> members = new ArrayList<>();
//
        Connection connection = DBConnection.getInstance().getConnection();
        String query = " SELECT r.member_id,r.first_name, r.last_name,r.phone_number,r.gender, b.branch_name ,r.membership_category,r.email, m.expiry_date  From register r INNER JOIN branch b ON b.branch_id =r.branch_id INNER JOIN users u ON u.member_id=r.member_id INNER JOIN payment_paidmember_membership pm ON pm.member_id = r.member_id INNER JOIN membership m ON m.membership_id = pm.membership_id  where u.status=\"1\"; ";
        PreparedStatement pst = connection.prepareStatement(query);
        String physicaltype = "Physical";

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                members.add(new AdminMember(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getDate(9).toLocalDate(),
                        physicaltype
                ));

            }
        }
        String query1 = "SELECT r.member_id,r.first_name, r.last_name,r.phone_number,r.gender,r.membership_category,r.email, m.expiry_date  From register r INNER JOIN users u ON u.member_id=r.member_id INNER JOIN payment_paidmember_membership pm ON pm.member_id = r.member_id INNER JOIN membership m ON m.membership_id = pm.membership_id  where u.status=\"1\" AND r.membership_sign=\"virtual_member\" ";
        PreparedStatement pst1 = connection.prepareStatement(query1);
        String virtualtype = "Virtual";
        String branch ="-";

        ResultSet resultSet1 = pst1.executeQuery();

        while (resultSet1.next()) {
            if(resultSet1 != null) {
                members.add(new AdminMember(
                        resultSet1.getString(1),
                        resultSet1.getString(2),
                        resultSet1.getString(3),
                        resultSet1.getString(4),
                        resultSet1.getString(5),
                        branch,
                        resultSet1.getString(6),
                        resultSet1.getString(7),
                        resultSet1.getDate(8).toLocalDate(),
                        virtualtype
                ));

            }
        }
        return members;
    }

}
