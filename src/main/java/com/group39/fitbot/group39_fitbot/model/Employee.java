package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;
import java.util.Date;

public class Employee {
    private String employee_id;
    private String firstname;
    private String lastname;
    private String email;
    private String nic;
    private Date dob;
    private String gender;
    private String branch_id;
    private String type;

    public Employee() {
    }

    public Employee(String employee_id, String firstname, String lastname, String email, String nic, Date dob, String gender, String branch_id, String type) {
        this.employee_id = employee_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.gender = gender;
        this.branch_id = branch_id;
        this.type = type;
    }

    public String getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(String employee_id) {
        this.employee_id = employee_id;
    }

    public String getFirst_name() {
        return firstname;
    }

    public void setFirst_name(String first_name) {
        this.firstname = first_name;
    }

    public String getLast_name() {
        return lastname;
    }

    public void setLast_name(String last_name) {
        this.lastname = last_name;
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

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
