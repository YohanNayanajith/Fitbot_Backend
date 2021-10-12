package com.group39.fitbot.group39_fitbot.model;

import java.sql.Date;
import java.time.LocalDate;

public class Member {
    private String member_id;
    private String first_name;
    private String last_name;
    private String email;
    private String nic;
    private Date dob;
    private String gender;
    private String instructor_id;

    public Member() {
    }

    public Member(String member_id, String first_name, String last_name, String email, String nic, Date dob, String gender, String instructor_id) {
        this.member_id = member_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.gender = gender;
        this.instructor_id = instructor_id;
    }

    @Override
    public String toString() {
        return "Member{" +
                "member_id='" + member_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", dob=" + dob +
                ", gender='" + gender + '\'' +
                ", instructor_id='" + instructor_id + '\'' +
                '}';
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

    public String getInstructor_id() {
        return instructor_id;
    }

    public void setInstructor_id(String instructor_id) {
        this.instructor_id = instructor_id;
    }
}
