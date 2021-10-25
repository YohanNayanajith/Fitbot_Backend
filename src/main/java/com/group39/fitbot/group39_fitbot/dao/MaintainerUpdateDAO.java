package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import java.sql.*;
import java.util.List;

public class MaintainerUpdateDAO {
    public static boolean updateForm(FormMaintain formMaintain) throws SQLException, ClassNotFoundException {
        Connection connection = DBConnection.getInstance().getConnection();
        String query ="UPDATE form SET status = ? , complet_dis=?, complet_img=?, comp_date=?, comp_time=? WHERE form_id =?";
        PreparedStatement pst = connection.prepareStatement(query);

        pst.setString(1, "Completed");
        pst.setString(2, formMaintain.getComplet_dis());
        pst.setString(3, formMaintain.getComplet_img());
        pst.setString(4, formMaintain.getComp_date());
        pst.setString(5, formMaintain.getComp_time());
        pst.setInt(6, formMaintain.getForm_id() );


        System.out.println(formMaintain);
        System.out.println("I am in DAO");
        System.out.println(pst.executeUpdate());
        return pst.executeUpdate()>0;
    }
}
