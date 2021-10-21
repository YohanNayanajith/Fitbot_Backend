package com.group39.fitbot.group39_fitbot.model;

public class Equipment {
      private String equipment_id;
      private String equipment_type;
      private String last_modified_date;
      private String next_maintenance_date;
      private String purchase_date;

      public Equipment(){

      }

      public Equipment(String equipment_id, String equipment_type, String last_modified_date, String next_maintenance_date, String purchase_date) {
            this.equipment_id = equipment_id;
            this.equipment_type = equipment_type;
            this.last_modified_date = last_modified_date;
            this.next_maintenance_date = next_maintenance_date;
            this.purchase_date = purchase_date;
      }

      public String getEquipment_id() {
            return equipment_id;
      }

      public void setEquipment_id(String equipment_id) {
            this.equipment_id = equipment_id;
      }

      public String getEquipment_type() {
            return equipment_type;
      }

      public void setEquipment_type(String equipment_type) {
            this.equipment_type = equipment_type;
      }

      public String getLast_modified_date() {
            return last_modified_date;
      }

      public void setLast_modified_date(String last_modified_date) {
            this.last_modified_date = last_modified_date;
      }

      public String getNext_maintenance_date() {
            return next_maintenance_date;
      }

      public void setNext_maintenance_date(String next_maintenance_date) {
            this.next_maintenance_date = next_maintenance_date;
      }

      public String getPurchase_date() {
            return purchase_date;
      }

      public void setPurchase_date(String purchase_date) {
            this.purchase_date = purchase_date;
      }

      @Override
      public String toString() {
            return "Equipment{" +
                    "equipment_id='" + equipment_id + '\'' +
                    ", equipment_type='" + equipment_type + '\'' +
                    ", last_modified_date='" + last_modified_date + '\'' +
                    ", next_maintenance_date='" + next_maintenance_date + '\'' +
                    ", purchase_date='" + purchase_date + '\'' +
                    '}';
      }
}
