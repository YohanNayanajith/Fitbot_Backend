package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;
import java.util.Date;

public class Membership {
    private int membership_id;
    private int membership_fee;
    private String membership_category;
    private LocalDate expiry_day;
    private int renewal;
    private LocalDate membership_payment_date;
    private String has_instructor; //TRUE or FALSE
    private int instructor_price;
    private int discount_price;

    public Membership() {
    }

    public Membership(int membership_id, int membership_fee, String membership_category, LocalDate expiry_day, int renewal, LocalDate membership_payment_date, String has_instructor, int instructor_price, int discount_price) {
        this.membership_id = membership_id;
        this.membership_fee = membership_fee;
        this.membership_category = membership_category;
        this.expiry_day = expiry_day;
        this.renewal = renewal;
        this.membership_payment_date = membership_payment_date;
        this.has_instructor = has_instructor;
        this.instructor_price = instructor_price;
        this.discount_price = discount_price;
    }

    public int getMembership_id() {
        return membership_id;
    }

    public void setMembership_id(int membership_id) {
        this.membership_id = membership_id;
    }

    public int getMembership_fee() {
        return membership_fee;
    }

    public void setMembership_fee(int membership_fee) {
        this.membership_fee = membership_fee;
    }

    public String getMembership_category() {
        return membership_category;
    }

    public void setMembership_category(String membership_category) {
        this.membership_category = membership_category;
    }

    public LocalDate getExpiry_day() {
        return expiry_day;
    }

    public void setExpiry_day(LocalDate expiry_day) {
        this.expiry_day = expiry_day;
    }

    public int getRenewal() {
        return renewal;
    }

    public void setRenewal(int renewal) {
        this.renewal = renewal;
    }

    public LocalDate getMembership_payment_date() {
        return membership_payment_date;
    }

    public void setMembership_payment_date(LocalDate membership_payment_date) {
        this.membership_payment_date = membership_payment_date;
    }

    public String getHas_instructor() {
        return has_instructor;
    }

    public void setHas_instructor(String has_instructor) {
        this.has_instructor = has_instructor;
    }

    public int getInstructor_price() {
        return instructor_price;
    }

    public void setInstructor_price(int instructor_price) {
        this.instructor_price = instructor_price;
    }

    public int getDiscount_price() {
        return discount_price;
    }

    public void setDiscount_price(int discount_price) {
        this.discount_price = discount_price;
    }

    @Override
    public String toString() {
        return "Membership{" +
                "membership_id=" + membership_id +
                ", membership_fee=" + membership_fee +
                ", membership_category='" + membership_category + '\'' +
                ", expiry_day=" + expiry_day +
                ", renewal=" + renewal +
                ", membership_payment_date=" + membership_payment_date +
                ", has_instructor='" + has_instructor + '\'' +
                ", instructor_price=" + instructor_price +
                ", discount_price=" + discount_price +
                '}';
    }
}
