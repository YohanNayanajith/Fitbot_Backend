package com.group39.fitbot.group39_fitbot.dao;

import com.group39.fitbot.group39_fitbot.database.DBConnection;
import com.group39.fitbot.group39_fitbot.model.Workout;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class WorkoutDAO {
    public static Workout getWorkout() throws SQLException, ClassNotFoundException {
        Workout workout = new Workout();
        Connection connection = DBConnection.getInstance().getConnection();
        String query = "SELECT * FROM workout";
        PreparedStatement pst = connection.prepareStatement(query);
//        pst.setString(1,register.getFirst_name());

        ResultSet resultSet = pst.executeQuery();

        if (resultSet.next()) {
            workout.setWorkout_id(resultSet.getInt(1));
            workout.setWorkout_description(resultSet.getString(2));
            workout.setTotal_reps(resultSet.getString(3));
            workout.setWorkout_gender(resultSet.getString(4));
            workout.setRest_time(resultSet.getString(5));
            workout.setWorkout_type(resultSet.getString(6));
            workout.setDuration(resultSet.getString(7));
            workout.setExercise(resultSet.getString(8));
            workout.setEquipment_type(resultSet.getString(9));

            return workout;
        } else {
            return null;
        }
    }
}
