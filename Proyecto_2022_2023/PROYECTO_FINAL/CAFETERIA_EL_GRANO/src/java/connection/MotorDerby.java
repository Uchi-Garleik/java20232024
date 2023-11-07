/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connection;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Product;

/**
 *
 * @author Uchi
 */

public class MotorDerby {
    String DB_URL = "jdbc:derby://localhost:1527/COFFEESHOP";
    String DB_USER = "root";
    String DB_PWD = "root";
        
    Connection connection;
    Statement statement;
    ResultSet resultSet;
    DriverManager driverManager;
    
    public void connect(){ 
        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PWD);
            statement = connection.createStatement();
        } catch (SQLException ex) {
            Logger.getLogger(MotorDerby.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    
    // OPTIMIZE WITH EXECUTE
    public int executeUpdate(String sql){
        int affectedRows = 0;
        try {
            affectedRows = statement.executeUpdate(sql);
        } catch (SQLException ex) {
            Logger.getLogger(MotorDerby.class.getName()).log(Level.SEVERE, null, ex);
        }
        return affectedRows;
    }
    
    public ResultSet executeQuery(String sql){
        try {    
            return resultSet = statement.executeQuery(sql);
        } catch (SQLException ex) {
            Logger.getLogger(MotorDerby.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    public void close(){
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            
            if (statement != null) {
                statement.close();
            }
            
            if (connection != null) {
                connection.close();
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(MotorDerby.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
