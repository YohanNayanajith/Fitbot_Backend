package com.group39.fitbot.group39_fitbot.model;


import java.sql.Date;

public class Employee {
    private String employee_id;
    private String branch_name;
    private String firstname;
    private String lastname;
    private String gender;
    private String email;
    private String nic;
    private Date dob;
    private String address;
    private String primarycontact;
    private String secondarycontact;
    private String type;

    public Employee() {
    }

    public Employee(String employee_id, String branch_name, String firstname, String lastname, String gender, String email, String nic, Date dob, String address, String primarycontact, String secondarycontact, String type) {
        this.employee_id = employee_id;
        this.branch_name = branch_name;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.address = address;
        this.primarycontact = primarycontact;
        this.secondarycontact = secondarycontact;
        this.type = type;
    }

    public Employee(String employee_id, String branch_name, String firstname, String lastname, String gender, String email, String nic, Date dob, String address, String primarycontact, String secondarycontact) {
        this.employee_id = employee_id;
        this.branch_name = branch_name;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.address = address;
        this.primarycontact = primarycontact;
        this.secondarycontact = secondarycontact;
    }

    public String getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(String employee_id) {
        this.employee_id = employee_id;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_id(String branch_id) {
        this.branch_name = branch_name;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
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

    public java.sql.Date getDob() {
        return (java.sql.Date) dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPrimarycontact() {
        return primarycontact;
    }

    public void setPrimarycontact(String primarycontact) {
        this.primarycontact = primarycontact;
    }

    public String getSecondarycontact() {
        return secondarycontact;
    }

    public void setSecondarycontact(String secondarycontact) {
        this.secondarycontact = secondarycontact;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employee_id='" + employee_id + '\'' +
                ", branch_name='" + branch_name + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", dob=" + dob +
                ", address='" + address + '\'' +
                ", primarycontact='" + primarycontact + '\'' +
                ", secondarycontact='" + secondarycontact + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}