package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Workout;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class WorkoutDAO {
    public static List<Workout> getWorkout() throws SQLException, ClassNotFoundException {
        List<Workout> workouts = new ArrayList<>();
        Workout workout = new Workout();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM workout";
        PreparedStatement pst = connection.prepareStatement(query);
//        pst.setString(1,register.getFirst_name());

        ResultSet resultSet = pst.executeQuery();

        while (resultSet.next()) {
            if(resultSet != null) {
                workouts.add(new Workout(
                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getString(9)
                ));
            }
        }
        return workouts;
    }
}
