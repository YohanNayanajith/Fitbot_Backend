package com.group39.fitbot.group39_fitbot.model;

public class Login {
    private String member_id;
    private String user_name;
    private String password;
    private String userType;

    public Login() {
    }

    public Login(String user_name, String password, String userType, String member_id) {
        this.user_name = user_name;
        this.password = password;
        this.userType = userType;
        this.member_id = member_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    @Override
    public String toString() {
        return "Login{" +
                "member_id='" + member_id + '\'' +
                ", user_name='" + user_name + '\'' +
                ", password='" + password + '\'' +
                ", userType='" + userType + '\'' +
                '}';
    }
}
