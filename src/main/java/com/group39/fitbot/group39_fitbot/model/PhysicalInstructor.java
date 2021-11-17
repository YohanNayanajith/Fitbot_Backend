package com.group39.fitbot.group39_fitbot.model;

import java.util.Date;

public class PhysicalInstructor {
    private String instructor_id;
    private String first_name;
    private String last_name;
    private String gender;
    private String email;
    private String nic;
    private Date dob;
    private String address;
    private int primary_contact;
    private int secondary_contact;
    private String main_skill;
    private String profile_image_url;

    public PhysicalInstructor() {
    }

    public PhysicalInstructor(String instructor_id, String first_name, String last_name, String gender, String email, String nic, Date dob, String address, int primary_contact, int secondary_contact, String main_skill, String profile_image_url) {
        this.instructor_id = instructor_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.email = email;
        this.nic = nic;
        this.dob = dob;
        this.address = address;
        this.primary_contact = primary_contact;
        this.secondary_contact = secondary_contact;
        this.main_skill = main_skill;
        this.profile_image_url = profile_image_url;
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

    public Date getDob() {
        return dob;
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

    public int getPrimary_contact() {
        return primary_contact;
    }

    public void setPrimary_contact(int primary_contact) {
        this.primary_contact = primary_contact;
    }

    public int getSecondary_contact() {
        return secondary_contact;
    }

    public void setSecondary_contact(int secondary_contact) {
        this.secondary_contact = secondary_contact;
    }

    public String getMain_skill() {
        return main_skill;
    }

    public void setMain_skill(String main_skill) {
        this.main_skill = main_skill;
    }

    public String getProfile_image_url() {
        return profile_image_url;
    }

    public void setProfile_image_url(String profile_image_url) {
        this.profile_image_url = profile_image_url;
    }

    @Override
    public String toString() {
        return "PhysicalInstructor{" +
                "instructor_id='" + instructor_id + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", dob=" + dob +
                ", address='" + address + '\'' +
                ", primary_contact=" + primary_contact +
                ", secondary_contact=" + secondary_contact +
                '}';
    }
}
