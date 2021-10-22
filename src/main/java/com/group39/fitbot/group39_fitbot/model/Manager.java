package com.group39.fitbot.group39_fitbot.model;

public class Manager {
    private String branchmanager_id;
    private String first_name;
    private String last_name;
    private String email;
    private String NIC;
    private String dob;
    private String gender;
    private String branch_id;

    public Manager(){
    }

    public Manager(String branchmanager_id,String first_name,String last_name, String email, String NIC,String dob, String gender,  String branch_id ){
        this.branchmanager_id = branchmanager_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.NIC = NIC;
        this.dob = dob;
        this.gender = gender;
        this.branch_id = branch_id;
    }

    public String getBranchmanager_id() {
        return branchmanager_id;
    }

    public void setBranchmanager_id(String branchmanager_id) {
        this.branchmanager_id = branchmanager_id;
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

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
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
        return "Manager{" +
                "branchmanager_id='" + branchmanager_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", NIC='" + NIC + '\'' +
                ", dob='" + dob + '\'' +
                ", gender='" + gender + '\'' +
                ", branch_id='" + branch_id + '\'' +
                '}';
    }
}


