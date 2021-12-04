package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;

public class PhysicalPayment {
    private int payment_id;
    private LocalDate payment_date;
    private String payment_method;
    private LocalDate previous_expire_date;
    private String currency;
    private double payment_amount;
    private String authorization_token;
    private String payment_status;
    private String cus_first_name;
    private String cus_last_name;
    private String cus_address;
    private String cus_city;
    private LocalDate new_expire_date;
    private int alter_table_payment_id;

    public PhysicalPayment() {}

    public PhysicalPayment(int payment_id, LocalDate payment_date, String payment_method, LocalDate previous_expire_date, String currency, double payment_amount, String authorization_token, String payment_status, String cus_first_name, String cus_last_name, String cus_address, String cus_city, LocalDate new_expire_date, int alter_table_payment_id) {
        this.payment_id = payment_id;
        this.payment_date = payment_date;
        this.payment_method = payment_method;
        this.previous_expire_date = previous_expire_date;
        this.currency = currency;
        this.payment_amount = payment_amount;
        this.authorization_token = authorization_token;
        this.payment_status = payment_status;
        this.cus_first_name = cus_first_name;
        this.cus_last_name = cus_last_name;
        this.cus_address = cus_address;
        this.cus_city = cus_city;
        this.new_expire_date = new_expire_date;
        this.alter_table_payment_id = alter_table_payment_id;
    }

    public int getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(int payment_id) {
        this.payment_id = payment_id;
    }

    public LocalDate getPayment_date() {
        return payment_date;
    }

    public void setPayment_date(LocalDate payment_date) {
        this.payment_date = payment_date;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }

    public LocalDate getPrevious_expire_date() {
        return previous_expire_date;
    }

    public void setPrevious_expire_date(LocalDate previous_expire_date) {
        this.previous_expire_date = previous_expire_date;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public double getPayment_amount() {
        return payment_amount;
    }

    public void setPayment_amount(double payment_amount) {
        this.payment_amount = payment_amount;
    }

    public String getAuthorization_token() {
        return authorization_token;
    }

    public void setAuthorization_token(String authorization_token) {
        this.authorization_token = authorization_token;
    }

    public String getPayment_status() {
        return payment_status;
    }

    public void setPayment_status(String payment_status) {
        this.payment_status = payment_status;
    }

    public String getCus_first_name() {
        return cus_first_name;
    }

    public void setCus_first_name(String cus_first_name) {
        this.cus_first_name = cus_first_name;
    }

    public String getCus_last_name() {
        return cus_last_name;
    }

    public void setCus_last_name(String cus_last_name) {
        this.cus_last_name = cus_last_name;
    }

    public String getCus_address() {
        return cus_address;
    }

    public void setCus_address(String cus_address) {
        this.cus_address = cus_address;
    }

    public String getCus_city() {
        return cus_city;
    }

    public void setCus_city(String cus_city) {
        this.cus_city = cus_city;
    }

    public LocalDate getNew_expire_date() {
        return new_expire_date;
    }

    public void setNew_expire_date(LocalDate new_expire_date) {
        this.new_expire_date = new_expire_date;
    }

    public int getAlter_table_payment_id() {
        return alter_table_payment_id;
    }

    public void setAlter_table_payment_id(int alter_table_payment_id) {
        this.alter_table_payment_id = alter_table_payment_id;
    }

    @Override
    public String toString() {
        return "PhysicalPayment{" +
                "payment_id=" + payment_id +
                ", payment_date=" + payment_date +
                ", payment_method='" + payment_method + '\'' +
                ", previous_expire_date=" + previous_expire_date +
                ", currency='" + currency + '\'' +
                ", payment_amount=" + payment_amount +
                ", authorization_token='" + authorization_token + '\'' +
                ", payment_status='" + payment_status + '\'' +
                ", cus_first_name='" + cus_first_name + '\'' +
                ", cus_last_name='" + cus_last_name + '\'' +
                ", cus_address='" + cus_address + '\'' +
                ", cus_city='" + cus_city + '\'' +
                '}';
    }
}
