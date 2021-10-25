package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MaintainerWriteDAO {

    public static FormMaintain getFormDetails(int form_id) throws SQLException, ClassNotFoundException{
        FormMaintain formMaintain=new FormMaintain();
        Connection connection = DBConnection.getInstance().getConnection();
        String query="SELECT * FROM form WHERE form_id =?";

        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1, String.valueOf(form_id));

        System.out.println(form_id);

        ResultSet oldresult = pst.executeQuery();

        if(oldresult.next()){
           formMaintain.setForm_id(oldresult.getInt(1));
           formMaintain.setMaintainer_id(oldresult.getInt(2));
           formMaintain.setEquipment_type(oldresult.getString(3));
           formMaintain.setNo_of_maintainers(oldresult.getInt(4));
           formMaintain.setDescription(oldresult.getString(5));
           formMaintain.setStatus(oldresult.getString(6));
           formMaintain.setBranchmanager_id(oldresult.getString(7));
           formMaintain.setBranch_id(oldresult.getString(8));
           formMaintain.setRe_time(oldresult.getString(9));
           formMaintain.setRe_date(oldresult.getString(10));
           formMaintain.setComplet_dis(oldresult.getString(11));
           formMaintain.setComplet_img(oldresult.getString(12));
           formMaintain.setComp_date(oldresult.getString(13));
           formMaintain.setComp_time(oldresult.getString(14));



        }
        System.out.println(formMaintain.getBranch_id());
        return formMaintain;
    }
}
