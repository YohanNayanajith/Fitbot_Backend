package com.group39.fitbot.group39_fitbot.model;


import java.sql.Time;
import java.util.Date;

public class FormMaintain {
     private int form_id;
     private int maintainer_id;
     private String equipment_type;
     private int no_of_maintainers;
     private String description;
     private String status;
     private String branchmanager_id;
     private String branch_id;
     private Time re_time;
     private Date re_date;
     private String complet_dis;
     private String complet_img;
     private Date comp_date;
     private Time comp_time;

     public FormMaintain() {
     }

     public FormMaintain(int form_id, int maintainer_id, String equipment_type, int no_of_maintainers, String description, String status, String branchmanager_id, String branch_id, Time re_time, Date re_date, String complet_dis, String complet_img, Date comp_date, Time comp_time) {
          this.form_id = form_id;
          this.maintainer_id = maintainer_id;
          this.equipment_type = equipment_type;
          this.no_of_maintainers = no_of_maintainers;
          this.description = description;
          this.status = status;
          this.branchmanager_id = branchmanager_id;
          this.branch_id = branch_id;
          this.re_time = re_time;
          this.re_date = re_date;
          this.complet_dis = complet_dis;
          this.complet_img = complet_img;
          this.comp_date = comp_date;
          this.comp_time = comp_time;
     }

     public FormMaintain(int form_id, String complet_dis, String complet_img, Date comp_date, Time comp_time) {
          this.form_id = form_id;
          this.complet_dis = complet_dis;
          this.complet_img = complet_img;
          this.comp_date = comp_date;
          this.comp_time = comp_time;
     }

     public int getForm_id() {
          return form_id;
     }

     public void setForm_id(int form_id) {
          this.form_id = form_id;
     }

     public int getMaintainer_id() {
          return maintainer_id;
     }

     public void setMaintainer_id(int maintainer_id) {
          this.maintainer_id = maintainer_id;
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

     public String getStatus() {
          return status;
     }

     public void setStatus(String status) {
          this.status = status;
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

     public Time getRe_time() {
          return re_time;
     }

     public void setRe_time(Time re_time) {
          this.re_time = re_time;
     }

     public Date getRe_date() {
          return re_date;
     }

     public void setRe_date(Date re_date) {
          this.re_date = re_date;
     }

     public String getComplet_dis() {
          return complet_dis;
     }

     public void setComplet_dis(String complet_dis) {
          this.complet_dis = complet_dis;
     }

     public String getComplet_img() {
          return complet_img;
     }

     public void setComplet_img(String complet_img) {
          this.complet_img = complet_img;
     }

     public Date getComp_date() {
          return comp_date;
     }

     public void setComp_date(Date comp_date) {
          this.comp_date = comp_date;
     }

     public Time getComp_time() {
          return comp_time;
     }

     public void setComp_time(Time comp_time) {
          this.comp_time = comp_time;
     }


     @Override
     public String toString() {
          return "FormMaintain{" +
                  "form_id=" + form_id +
                  ", maintainer_id=" + maintainer_id +
                  ", equipment_type='" + equipment_type + '\'' +
                  ", no_of_maintainers=" + no_of_maintainers +
                  ", description='" + description + '\'' +
                  ", status='" + status + '\'' +
                  ", branchmanager_id='" + branchmanager_id + '\'' +
                  ", branch_id='" + branch_id + '\'' +
                  ", re_time=" + re_time +
                  ", re_date=" + re_date +
                  ", complet_dis='" + complet_dis + '\'' +
                  ", complet_img='" + complet_img + '\'' +
                  ", comp_date=" + comp_date +
                  ", comp_time=" + comp_time +
                  '}';
     }
}



