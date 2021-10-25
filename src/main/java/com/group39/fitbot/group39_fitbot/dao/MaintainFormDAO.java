package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class MaintainFormDAO {
    public static List<FormMaintain> getFormMaintain() throws SQLException, ClassNotFoundException{
        List<FormMaintain> forms = new ArrayList<>();
        FormMaintain formMaintain=new FormMaintain();
        Connection connection = DBConnection.getInstance().getConnection();
        String query="SELECT * FROM form";
        PreparedStatement pst = connection.prepareStatement(query);
        ResultSet resultSet = pst.executeQuery();
        System.out.println("DAO method called");

        while(resultSet.next()){
            if(resultSet !=null){
                forms.add(new FormMaintain(
                        resultSet.getInt(1),
                        resultSet.getInt(2),
                        resultSet.getString(3),
                        resultSet.getInt(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getString(12),
                        resultSet.getString(13),
                        resultSet.getString(14)
                ));
            }
        }
//        System.out.println(forms);
        return forms;
    }


}
