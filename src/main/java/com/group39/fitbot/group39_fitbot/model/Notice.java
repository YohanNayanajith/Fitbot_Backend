package com.group39.fitbot.group39_fitbot.model;

public class Notice {
    private String notice_no;
    private String title;
    private String description;

    public Notice(){

    }

    public Notice(String notice_no, String title, String description) {
        this.notice_no = notice_no;
        this.title = title;
        this.description = description;
    }


    public String getNotice_no() {
        return notice_no;
    }

    public void setNotice_no(String notice_no) {
        this.notice_no = notice_no;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public String toString() {
        return "Notice{" +
                "notice_no=" + notice_no +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
