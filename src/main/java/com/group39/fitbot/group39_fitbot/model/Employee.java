package com.group39.fitbot.group39_fitbot.model;



import java.time.LocalDate;


public class Employee {
    private String employee_id;
    private String branch_id;
    private String firstname;
    private String lastname;
    private String gender;
    private String email;
    private String nic;
    private String dob;
    private String address;
    private String primarycontact;
    private String secondarycontact;
    private String designation;
    private LocalDate date_joined;
    private String status;


    public Employee() {
    }


    public Employee(String employee_id, String branch_id, String firstname, String lastname, String gender, String email, String nic, String dob, String address, String primarycontact, String secondarycontact,  LocalDate date_joined, String status,String designation) {
        this.employee_id = employee_id;
        this.branch_id = branch_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.address = address;
        this.primarycontact = primarycontact;
        this.secondarycontact = secondarycontact;
        this.designation = designation;
        this.date_joined = date_joined;
        this.status = status;
    }

    public Employee(String employee_id, String branch_id, String firstname, String lastname, String gender, String email, String nic, String dob, String address, String primarycontact, String secondarycontact, LocalDate date_joined, String status) {
        this.employee_id = employee_id;
        this.branch_id = branch_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.address = address;
        this.primarycontact = primarycontact;
        this.secondarycontact = secondarycontact;
        this.date_joined = date_joined;
        this.status = status;
    }

    public String getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(String employee_id) {
        this.employee_id = employee_id;
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

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
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

    public String getdesignation() {
        return designation;
    }

    public void setdesignation(String designation) {
        this.designation = designation;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public LocalDate getDate_joined() {
        return date_joined;
    }

    public void setDate_joined(LocalDate date_joined) {
        this.date_joined = date_joined;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employee_id='" + employee_id + '\'' +
                ", branch_id='" + branch_id + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", dob='" + dob + '\'' +
                ", address='" + address + '\'' +
                ", primarycontact='" + primarycontact + '\'' +
                ", secondarycontact='" + secondarycontact + '\'' +
                ", designation='" + designation + '\'' +
                ", date_joined=" + date_joined +
                ", status='" + status + '\'' +
                '}';
    }
}