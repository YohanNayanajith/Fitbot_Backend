package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;

public class Registartion {
    private String first_name;
    private String last_name;
    private LocalDate date_of_birth;
    private int contact_number;
    private String address;
    private String country;
    private String gender;
    private String password;
    private String confirm_password;
    private String membership_category;
    private String email;
    private String branch_type;

    private String member_id;
    private String register_id;
    private int weight;
    private int height;
    private String member_type;

    public Registartion() {
    }

    public Registartion(String first_name, String last_name, LocalDate date_of_birth, int contact_number, String address, String country, String gender, String password, String confirm_password, String member_type, String membership_category, int weight, int height, String member_id,String email,String branch_type) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.contact_number = contact_number;
        this.address = address;
        this.country = country;
        this.gender = gender;
        this.password = password;
        this.confirm_password = confirm_password;
        this.member_type = member_type;
        this.membership_category = membership_category;
//        this.member_id = member_id;
//        this.register_id = register_id;
        this.weight = weight;
        this.height = height;
        this.member_id = member_id;
        this.email= email;
        this.branch_type= branch_type;
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

    public LocalDate getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getContact_number() {
        return contact_number;
    }

    public void setContact_number(int contact_number) {
        this.contact_number = contact_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm_password() {
        return confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }

    public String getMembership_category() {
        return membership_category;
    }

    public void setMembership_category(String membership_category) {
        this.membership_category = membership_category;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public String getRegister_id() {
        return register_id;
    }

    public void setRegister_id(String register_id) {
        this.register_id = register_id;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getMember_type() {
        return member_type;
    }

    public void setMember_type(String member_type) {
        this.member_type = member_type;
    }

    public String getBranch_type() {
        return branch_type;
    }

    public void setBranch_type(String branch_type) {
        this.branch_type = branch_type;
    }

    @Override
    public String toString() {
        return "Registartion{" +
                "first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", date_of_birth=" + date_of_birth +
                ", contact_number=" + contact_number +
                ", address='" + address + '\'' +
                ", country='" + country + '\'' +
                ", gender='" + gender + '\'' +
                ", password='" + password + '\'' +
                ", confirm_password='" + confirm_password + '\'' +
                ", membership_category='" + membership_category + '\'' +
                ", email='" + email + '\'' +
                ", member_id='" + member_id + '\'' +
                ", register_id='" + register_id + '\'' +
                ", weight=" + weight +
                ", height=" + height +
                ", member_type='" + member_type + '\'' +
                '}';
    }
}
