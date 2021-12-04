package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.PhysicalMemberMessage;
import com.group39.fitbot.group39_fitbot.model.Registartion;
import com.group39.fitbot.group39_fitbot.model.Workout;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PhysicalMemberMessageDAO {
    public static List<PhysicalMemberMessage> retriveMessageDetailsSenderMember(String instructor_id, String member_id) throws SQLException, ClassNotFoundException {
        PhysicalMemberMessage messages = new PhysicalMemberMessage();

        Connection connection = DBConnection.getInstance().getConnection();

        String query = "SELECT chat_id FROM chat WHERE sender_id= ? AND receiver_id = ?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1, member_id);
        pst.setString(2, instructor_id);

        ResultSet resultSet = pst.executeQuery();

        int chatID = 0;
        if (resultSet.next()) {
            chatID = resultSet.getInt(1);
//            messages.setChat_id(resultSet.getInt(1));
//            messages.setSender_id(resultSet.getString(2));
//            messages.setReceiver_id(resultSet.getString(3));
//            messages.setChat_status(resultSet.getString(4));
        }

        List<PhysicalMemberMessage> physicalMemberMessage = new ArrayList<>();

        if(chatID != 0){
            String query1 = "SELECT * FROM message WHERE chat_id= ?";
            PreparedStatement pst1 = connection.prepareStatement(query1);
            pst1.setInt(1, chatID);

            ResultSet resultSet1 = pst1.executeQuery();

            while(resultSet1.next()) {
                if (resultSet1 != null) {
                    physicalMemberMessage.add(new PhysicalMemberMessage(
                            resultSet1.getInt(1),
                            resultSet1.getString(2),
                            resultSet1.getDate(3).toLocalDate(),
                            resultSet1.getTime(4).toLocalTime(),
                            resultSet1.getString(6),
                            resultSet1.getInt(5)
                    ));
                }
            }
        }

        return physicalMemberMessage;
    }
}
