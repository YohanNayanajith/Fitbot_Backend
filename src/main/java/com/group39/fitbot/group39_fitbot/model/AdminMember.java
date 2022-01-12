package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;

public class AdminMember {
    String member_id;
    String first_name;
    String last_name;
    String contact_no;
    String gender;
    String branch_name;
    String membership;
    String email;
    LocalDate due_date;
    String type;

    public AdminMember() {
    }

    public AdminMember(String member_id, String first_name, String last_name, String contact_no, String gender, String branch_name, String membership, String email, LocalDate due_date, String type) {
        this.member_id = member_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.contact_no = contact_no;
        this.gender = gender;
        this.branch_name = branch_name;
        this.membership = membership;
        this.email = email;
        this.due_date = due_date;
        this.type = type;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
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

    public String getContact_no() {
        return contact_no;
    }

    public void setContact_no(String contact_no) {
        this.contact_no = contact_no;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public String getMembership() {
        return membership;
    }

    public void setMembership(String membership) {
        this.membership = membership;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDue_date() {
        return due_date;
    }

    public void setDue_date(LocalDate due_date) {
        this.due_date = due_date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "AdminMember{" +
                "member_id='" + member_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", contact_no='" + contact_no + '\'' +
                ", gender='" + gender + '\'' +
                ", branch_id='" + branch_name + '\'' +
                ", membership='" + membership + '\'' +
                ", email='" + email + '\'' +
                ", due_date=" + due_date +
                ", type='" + type + '\'' +
                '}';
    }
}
