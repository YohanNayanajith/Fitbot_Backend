package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Notice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class NoticeDAO {

    public NoticeDAO() {
    }

    public static boolean addNotice(Notice notice) throws SQLException, ClassNotFoundException{

        Connection connection = DBConnection.getInstance().getConnection();
        String query = "INSERT INTO notice VALUES (?,?,?)";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1,notice.getNotice_no());
        pst.setString(2,notice.getTitle());
        pst.setString(3,notice.getDescription());
        return pst.executeUpdate() > 0;

//        if (resultSet.next()){
//            notice.setNotice_no(resultSet.getString(1));
//            notice.setTitle(resultSet.getString(2));
//            notice.setDescription(resultSet.getString(3));
//
//            return notice;
//        } else{
//            return null;
//        }


    }
}
