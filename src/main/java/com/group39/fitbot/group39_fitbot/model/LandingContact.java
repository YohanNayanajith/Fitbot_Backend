package com.group39.fitbot.group39_fitbot.model;

public class LandingContact {
    private String v_name;
    private String v_email;
    private String v_contact;
    private String v_message;

    public LandingContact() {
    }

    public LandingContact(String v_name, String v_email, String v_contact, String v_message) {
        this.v_name = v_name;
        this.v_email = v_email;
        this.v_contact = v_contact;
        this.v_message = v_message;
    }

    public String getV_name() {
        return v_name;
    }

    public void setV_name(String v_name) {
        this.v_name = v_name;
    }

    public String getV_email() {
        return v_email;
    }

    public void setV_email(String v_email) {
        this.v_email = v_email;
    }

    public String getV_contact() {
        return v_contact;
    }

    public void setV_contact(String v_contact) {
        this.v_contact = v_contact;
    }

    public String getV_message() {
        return v_message;
    }

    public void setV_message(String v_message) {
        this.v_message = v_message;
    }

    @Override
    public String toString() {
        return "LandingContact{" +
                "v_name='" + v_name + '\'' +
                ", v_email='" + v_email + '\'' +
                ", v_contact='" + v_contact + '\'' +
                ", v_message='" + v_message + '\'' +
                '}';
    }
}
