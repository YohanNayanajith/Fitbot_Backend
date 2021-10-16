package com.group39.fitbot.group39_fitbot.model;

public class ResetPassword {
    private String first_name;
    private String last_name;
    private int phone_number;
    private String password;
    private String confirm_password;

    public ResetPassword() {
    }

    public ResetPassword(String first_name, String last_name, int phone_number, String password, String confirm_password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.password = password;
        this.confirm_password = confirm_password;
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

    public int getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(int phone_number) {
        this.phone_number = phone_number;
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

    @Override
    public String toString() {
        return "ResetPassword{" +
                "first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", phone_number=" + phone_number +
                ", password='" + password + '\'' +
                ", confirm_password='" + confirm_password + '\'' +
                '}';
    }
}
