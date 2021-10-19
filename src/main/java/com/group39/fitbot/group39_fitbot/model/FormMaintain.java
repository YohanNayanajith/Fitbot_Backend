package com.group39.fitbot.group39_fitbot.model;

public class FormMaintain {
     private int form_id;
     private String equipment_type;
     private int no_of_maintainers;
     private String description;
     private String ststus;
     private String branchmanager_id;
     private String branch_id;
     private String re_time;
     private String re_date;

    public FormMaintain() {
    }

    public FormMaintain(int form_id, String equipment_type, int no_of_maintainers, String description, String ststus, String branchmanager_id, String branch_id, String re_time, String re_date) {
        this.form_id = form_id;
        this.equipment_type = equipment_type;
        this.no_of_maintainers = no_of_maintainers;
        this.description = description;
        this.ststus = ststus;
        this.branchmanager_id = branchmanager_id;
        this.branch_id = branch_id;
        this.re_time = re_time;
        this.re_date = re_date;
    }

    public int getForm_id() {
        return form_id;
    }

    public void setForm_id(int form_id) {
        this.form_id = form_id;
    }

    public String getEquipment_type() {
        return equipment_type;
    }

    public void setEquipment_type(String equipment_type) {
        this.equipment_type = equipment_type;
    }

    public int getNo_of_maintainers() {
        return no_of_maintainers;
    }

    public void setNo_of_maintainers(int no_of_maintainers) {
        this.no_of_maintainers = no_of_maintainers;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStstus() {
        return ststus;
    }

    public void setStstus(String ststus) {
        this.ststus = ststus;
    }

    public String getBranchmanager_id() {
        return branchmanager_id;
    }

    public void setBranchmanager_id(String branchmanager_id) {
        this.branchmanager_id = branchmanager_id;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    public String getRe_time() {
        return re_time;
    }

    public void setRe_time(String re_time) {
        this.re_time = re_time;
    }

    public String getRe_date() {
        return re_date;
    }

    public void setRe_date(String re_date) {
        this.re_date = re_date;
    }
}



