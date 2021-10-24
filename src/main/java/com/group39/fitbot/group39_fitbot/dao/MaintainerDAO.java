package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Maintainer;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MaintainerDAO {

    public static Maintainer getMaintainer(Login login ) throws SQLException, ClassNotFoundException {
        Maintainer maintainer = new Maintainer();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM users WHERE member_id = ?";
        PreparedStatement pst = connection.prepareStatement(query);
//        pst.setString(1, login.getMember_id);
        pst.setString(1, login.getMember_id());

        ResultSet resultSet = pst.executeQuery();

//        if(re)

        return null;
    }


}
