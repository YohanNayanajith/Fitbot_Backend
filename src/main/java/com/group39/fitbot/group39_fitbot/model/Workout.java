package com.group39.fitbot.group39_fitbot.model;

public class Workout {
    private int workout_id;
    private String workout_description;
    private String total_reps;
    private String workout_gender;
    private String rest_time;
    private String workout_type;
    private String duration;
    private String exercise;
    private String equipment_type;

    public Workout() {
    }

    public Workout(int workout_id, String workout_description, String total_reps, String workout_gender, String rest_time, String workout_type, String duration, String exercise, String equipment_type) {
        this.workout_id = workout_id;
        this.workout_description = workout_description;
        this.total_reps = total_reps;
        this.workout_gender = workout_gender;
        this.rest_time = rest_time;
        this.workout_type = workout_type;
        this.duration = duration;
        this.exercise = exercise;
        this.equipment_type = equipment_type;
    }

    public int getWorkout_id() {
        return workout_id;
    }

    public void setWorkout_id(int workout_id) {
        this.workout_id = workout_id;
    }

    public String getWorkout_description() {
        return workout_description;
    }

    public void setWorkout_description(String workout_description) {
        this.workout_description = workout_description;
    }

    public String getTotal_reps() {
        return total_reps;
    }

    public void setTotal_reps(String total_reps) {
        this.total_reps = total_reps;
    }

    public String getWorkout_gender() {
        return workout_gender;
    }

    public void setWorkout_gender(String workout_gender) {
        this.workout_gender = workout_gender;
    }

    public String getRest_time() {
        return rest_time;
    }

    public void setRest_time(String rest_time) {
        this.rest_time = rest_time;
    }

    public String getWorkout_type() {
        return workout_type;
    }

    public void setWorkout_type(String workout_type) {
        this.workout_type = workout_type;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public String getEquipment_type() {
        return equipment_type;
    }

    public void setEquipment_type(String equipment_type) {
        this.equipment_type = equipment_type;
    }

    @Override
    public String toString() {
        return "Workout{" +
                "workout_id=" + workout_id +
                ", workout_description='" + workout_description + '\'' +
                ", total_reps='" + total_reps + '\'' +
                ", workout_gender='" + workout_gender + '\'' +
                ", rest_time='" + rest_time + '\'' +
                ", workout_type='" + workout_type + '\'' +
                ", duration='" + duration + '\'' +
                ", exercise='" + exercise + '\'' +
                ", equipment_type='" + equipment_type + '\'' +
                '}';
    }
}
