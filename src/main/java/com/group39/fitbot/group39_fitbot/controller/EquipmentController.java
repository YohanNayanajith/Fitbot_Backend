package com.group39.fitbot.group39_fitbot.controller;

import com.google.gson.Gson;
import com.group39.fitbot.group39_fitbot.dao.EquipmentDAO;
import com.group39.fitbot.group39_fitbot.model.Equipment;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EquipmentController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("equipment get method called");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("Manager/BRANCH_MANAGER_EQUIPMENTS/MANAGER_EQUIPMENT.html");
        requestDispatcher.forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("equipment post method called");

        Equipment equipment = new Equipment();

        try{
            List<Equipment> all_equipments = new ArrayList<>();
            all_equipments = EquipmentDAO.getEquipment();
            System.out.println(all_equipments);
            Gson gson = new Gson();
            String equipmentJSON = gson.toJson(all_equipments);
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().write(equipmentJSON);

        } catch (SQLException e){
            e.printStackTrace();
        } catch (ClassNotFoundException e){
            e.printStackTrace();
        }


    }
}
