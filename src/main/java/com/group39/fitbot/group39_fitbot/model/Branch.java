package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;

public class Branch {
    private String branch_id;
    private String branch_name;
    private String branch_address;
    private String branch_email;
    private LocalDate  branch_date_of_commencement;
    private String branch_primary_contact;
    private String branch_secondary_contact;
    private String branch_image;

    public Branch() {
    }

    public Branch(String branch_id, String branch_name, String branch_address, String branch_email, LocalDate branch_date_of_commencement, String branch_primary_contact, String branch_secondary_contact, String branch_image) {
        this.branch_id = branch_id;
        this.branch_name = branch_name;
        this.branch_address = branch_address;
        this.branch_email=branch_email;
        this.branch_date_of_commencement = branch_date_of_commencement;
        this.branch_primary_contact = branch_primary_contact;
        this.branch_secondary_contact = branch_secondary_contact;
        this.branch_image = branch_image;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public String getBranch_address() {
        return branch_address;
    }

    public void setBranch_address(String branch_address) {
        this.branch_address = branch_address;
    }

    public LocalDate getBranch_date_of_commencement() {
        return branch_date_of_commencement;
    }

    public void setBranch_date_of_commencement(LocalDate branch_date_of_commencement) {
        this.branch_date_of_commencement = branch_date_of_commencement;
    }

    public String getBranch_primary_contact() {
        return branch_primary_contact;
    }

    public void setBranch_primary_contact(String branch_primary_contact) {
        this.branch_primary_contact = branch_primary_contact;
    }

    public String getBranch_secondary_contact() {
        return branch_secondary_contact;
    }

    public void setBranch_secondary_contact(String branch_secondary_contact) {
        this.branch_secondary_contact = branch_secondary_contact;
    }

    public String getBranch_image() {
        return branch_image;
    }

    public void setBranch_image(String branch_image) {
        this.branch_image = branch_image;
    }

    public String getBranch_email() {
        return branch_email;
    }

    public void setBranch_email(String branch_email) {
        this.branch_email = branch_email;
    }
}

