package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Equipment;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EquipmentDAO {
    public static List<Equipment> getEquipment() throws SQLException, ClassNotFoundException{
        List<Equipment> equipments = new ArrayList<>();
        Equipment equipment = new Equipment();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM equipment";
        PreparedStatement pst = connection.prepareStatement(query);

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if (resultSet != null) {
                equipments.add(new Equipment(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5)
                ));
            }
        }

        return equipments;

    }
}
