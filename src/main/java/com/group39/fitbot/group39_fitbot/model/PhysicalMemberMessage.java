package com.group39.fitbot.group39_fitbot.model;

import java.time.LocalDate;
import java.time.LocalTime;

public class PhysicalMemberMessage {
//    private String instructor_id;
//    private String first_name;
//    private String last_name;

    private int message_id;
    private String message_status;
    private LocalDate message_date;
    private LocalTime message_time;
    private String message_description;

    private int chat_id;
//    private String sender_id;
//    private String receiver_id;
//    private String chat_status;

    public PhysicalMemberMessage() {
    }

    public PhysicalMemberMessage(int message_id, String message_status, LocalDate message_date, LocalTime message_time, String message_description, int chat_id) {
        this.message_id = message_id;
        this.message_status = message_status;
        this.message_date = message_date;
        this.message_time = message_time;
        this.message_description = message_description;
        this.chat_id = chat_id;
    }

    public int getMessage_id() {
        return message_id;
    }

    public void setMessage_id(int message_id) {
        this.message_id = message_id;
    }

    public String getMessage_status() {
        return message_status;
    }

    public void setMessage_status(String message_status) {
        this.message_status = message_status;
    }

    public LocalDate getMessage_date() {
        return message_date;
    }

    public void setMessage_date(LocalDate message_date) {
        this.message_date = message_date;
    }

    public LocalTime getMessage_time() {
        return message_time;
    }

    public void setMessage_time(LocalTime message_time) {
        this.message_time = message_time;
    }

    public String getMessage_description() {
        return message_description;
    }

    public void setMessage_description(String message_description) {
        this.message_description = message_description;
    }

    public int getChat_id() {
        return chat_id;
    }

    public void setChat_id(int chat_id) {
        this.chat_id = chat_id;
    }

    @Override
    public String toString() {
        return "PhysicalMemberMessage{" +
                "message_id=" + message_id +
                ", message_status='" + message_status + '\'' +
                ", message_date=" + message_date +
                ", message_time=" + message_time +
                ", message_description='" + message_description + '\'' +
                ", chat_id=" + chat_id +
                '}';
    }
}
