package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;

public class Instructor {
    private String instructor_id;
    private String first_name;
    private String last_name;
    private String email;
    private String nic;
    private LocalDate dob;
    private String gender;
    private String branch_id;

    public Instructor() {
    }

    public Instructor(String instructor_id, String first_name, String last_name, String email, String nic, LocalDate dob, String gender, String branch_id) {
        this.instructor_id = instructor_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.gender = gender;
        this.branch_id = branch_id;
    }

    public String getInstructor_id() {
        return instructor_id;
    }

    public void setInstructor_id(String instructor_id) {
        this.instructor_id = instructor_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    @Override
    public String toString() {
        return "Instructor{" +
                "instructor_id='" + instructor_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", dob=" + dob +
                ", gender='" + gender + '\'' +
                ", branch_id='" + branch_id + '\'' +
                '}';
    }
}
