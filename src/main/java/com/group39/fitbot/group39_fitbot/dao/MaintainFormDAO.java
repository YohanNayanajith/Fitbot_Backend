package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.FormMaintain;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MaintainFormDAO {
    public static List<FormMaintain> getFormMaintain() throws SQLException, ClassNotFoundException{
        List<FormMaintain> forms = new ArrayList<>();
        FormMaintain fromMaintain = new FormMaintain();
        Connection connection = DBConnection.getInstance().getConnection();
        String query="SELECT * FROM form";
        PreparedStatement pst = connection.prepareStatement(query);
        ResultSet resultSet = pst.executeQuery();

        while(resultSet.next()){
            if(resultSet !=null){
                forms.add(new FormMaintain(
                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getInt(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9)

                ));
            }
        }
        return forms;
    }
}
