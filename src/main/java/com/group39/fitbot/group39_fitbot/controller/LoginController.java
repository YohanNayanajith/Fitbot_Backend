package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.group39.fitbot.group39_fitbot.dao.LoginDAO;
import com.group39.fitbot.group39_fitbot.dao.MemberDAO;
import com.group39.fitbot.group39_fitbot.dao.RegistartionDAO;
import com.group39.fitbot.group39_fitbot.model.Login;
import com.group39.fitbot.group39_fitbot.model.Member;
import com.group39.fitbot.group39_fitbot.model.Registartion;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

public class LoginController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Login controller is called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Landing/Login/login.html");
//        RequestDispatcher requestDispatcher = req.getRequestDispatcher("login");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("Login post controller is called");
        PrintWriter out = resp.getWriter();
        resp.setContentType("text/plain");
        String login_username = req.getParameter("login_username");
        String login_password = req.getParameter("login_password");
        System.out.println(login_password);
        System.out.println(login_username);

        Login login = new Login();
        login.setUser_name(login_username);
        login.setPassword(login_password); //pass the hashing password
        System.out.println(login);
        try {
            Login loginData = LoginDAO.getLoginData(login);

            HttpSession session = req.getSession(true);
            session.setAttribute("MemberID",loginData.getMember_id());
            session.setAttribute("userName",loginData.getUser_name());
            session.setAttribute("userType",loginData.getUserType());

            if(true){
                String userType = loginData.getUserType();
                switch (userType) {
                    case "Physical Member":
                        out.print("1");
                        break;
                    case "Virtual Member":
                        out.print("2");
                        break;
                    case "Instructor":
                        out.print("3");
                        break;
                    case "Manager":
                        out.print("4");
                        break;
                    case "Owner":
                        out.print("5");
                        break;
                    case "admin":
                        out.print("6");
                        break;
                    default:
                        out.print("You can't log now..please contact our administration");
                        break;
                }
            }else {
                out.print("Unsucesss");
            }
//            Gson gson = new Gson();
//            String memberJSON = gson.toJson(loginData);
//            resp.setContentType("application/json");
//            resp.setCharacterEncoding("UTF-8");
//            resp.getWriter().write(memberJSON);
//            System.out.println("Member json:"+memberJSON);

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public boolean checkLogin(Login login_user, Login loginDatabase){
        if((login_user.getUser_name() == loginDatabase.getUser_name()) && (login_user.getPassword() == loginDatabase.getPassword())){
            System.out.println(login_user.getUser_name()+loginDatabase.getUser_name());
            return true;
        }else{
            return false;
        }
    }
}
