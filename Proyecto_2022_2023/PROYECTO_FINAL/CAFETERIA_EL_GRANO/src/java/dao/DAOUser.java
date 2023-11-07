/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import connection.MotorDerby;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.User;

/**
 *
 * @author S2-PC130
 */
public class DAOUser implements DAO<User, Object>{
    
    private String DB_NAME = "USERS";
    private String SQL_INSERT = "INSERT INTO " + DB_NAME + "(ACCOUNT_TYPE, EMAIL, USERNAME, PASSWORD) VALUES" ;
    private String SQL_FIND_ALL = "SELECT * FROM " + DB_NAME + " WHERE 1=1";
    
    private MotorDerby motorDerby;
    
    public DAOUser(){
        motorDerby = new MotorDerby();
    }
    
    @Override
    public String add(User user) {
        motorDerby.connect();
        ArrayList<User> users = new ArrayList<>();
        User userAux = new User();
        userAux.setUsername(user.getUsername());
        users = findAll(userAux);
        if (!users.isEmpty()) {
            System.out.println("CAN'T ADD USER... USERNAME IS ALREADY IN THE DATABASE");
            return "Sign Up Failed. Username is already in the database";
        }else{
            String sql = SQL_INSERT + 
                    "('" + user.getAccountType() + "',"
                    + "'" + user.getEmail() + "',"
                    + "'" + user.getUsername() + "',"
                    + "'" + user.getPassword() + "')";
            motorDerby.executeUpdate(sql);
            return "Sign Up Successfull";
        }
    }

    @Override
    public ArrayList<User> findAll(User bean) {
        ArrayList<User> userList = new ArrayList<>();
        motorDerby.connect();
        String sql = SQL_FIND_ALL;
        
        if ( bean != null ) {
            if (bean.getUsername() != null) {
                sql += " AND USERNAME = '" + bean.getUsername() + "'";
                System.out.println("GETTING USERNAME...");
            }

            if (bean.getPassword() != null) {
                sql += " AND PASSWORD = '" + bean.getPassword() + "'";
                System.out.println("GETTING PASSWORD...");
            }    
        }
        System.out.println(sql);
        ResultSet resultSet = motorDerby.executeQuery(sql);
        try {
            while (resultSet.next()) {
                    User user = new User();
                    System.out.println("CREATING USER...");
                    user.setAccountType(resultSet.getString(2));
                    user.setEmail(resultSet.getString(3));
                    user.setUsername(resultSet.getString(4));
                    user.setPassword(resultSet.getString(5));
                    userList.add(user);
                    System.out.println("ADDING USER TO LIST...");
            }
        } catch (SQLException ex) {
            Logger.getLogger(DAOUser.class.getName()).log(Level.SEVERE, null, ex);
        }
        return userList;
    }
    
}
