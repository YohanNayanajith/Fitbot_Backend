package com.group39.fitbot.group39_fitbot.model;

import java.sql.Date;

public class Equipment {
    private int branch_id;
    private int equipment_id;
    private String description;
    private String category;
    private Date purchase_date;
    private Date last_modified_date;
    private Date next_maintenance_date;


    public Equipment() {
    }

    public Equipment(int branch_id, int equipment_id, String description, String category, Date purchase_date, Date last_modified_date, Date next_maintenance_date) {
        this.branch_id = branch_id;
        this.equipment_id = equipment_id;
        this.description = description;
        this.category = category;
        this.purchase_date = purchase_date;
        this.last_modified_date = last_modified_date;
        this.next_maintenance_date = next_maintenance_date;
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }

    public int getEquipment_id() {
        return equipment_id;
    }

    public void setEquipment_id(int equipment_id) {
        this.equipment_id = equipment_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getPurchase_date() {
        return purchase_date;
    }

    public void setPurchase_date(Date purchase_date) {
        this.purchase_date = purchase_date;
    }

    public Date getLast_modified_date() {
        return last_modified_date;
    }

    public void setLast_modified_date(Date last_modified_date) {
        this.last_modified_date = last_modified_date;
    }

    public Date getNext_maintenance_date() {
        return next_maintenance_date;
    }

    public void setNext_maintenance_date(Date next_maintenance_date) {
        this.next_maintenance_date = next_maintenance_date;
    }


    @Override
    public String toString() {
        return "Equipment{" +
                "branch_id=" + branch_id +
                ", equipment_id=" + equipment_id +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", purchase_date=" + purchase_date +
                ", last_modified_date=" + last_modified_date +
                ", next_maintenance_date=" + next_maintenance_date +
                '}';
    }

}
