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
import model.Product;

/**
 *
 * @author Uchi
 */
public class DAOProduct {
    
    private String DB_NAME = "PRODUCTS";
    private String INSERT_SQL = "INSERT INTO " + DB_NAME + " (NOMBRE, CATEGORIA) VALUES";
    private String FIND_ALL_SQL = "SELECT * FROM " + DB_NAME + " WHERE 1=1";
    
    private MotorDerby motorDerby;
    
    
    public DAOProduct(){
        motorDerby = new MotorDerby();
    }
    
    public void add(Product bean){
        motorDerby.connect();
//        INSERT INTO PRODUCT (NOMBRE, CATEGORIA) VALUES('NOMBRE_PRODUCTO', 'CAFE')
        String sql = INSERT_SQL;
        sql += "('" + bean.getNombre()
                + "', '" + bean.getCategoria() + "'"
                + ")";
        System.out.println(sql);
        System.out.println("Columnas modificadas: " + motorDerby.executeUpdate(sql));
        motorDerby.close();
    }

    public ArrayList<Product> findAll(Product bean){
        ArrayList<Product> productList = new ArrayList<>();
        motorDerby.connect();
        String sql = FIND_ALL_SQL;
        if ( bean != null ) {
            if ( bean.getNombre() != null ) {
                sql += " AND NAME = '" + bean.getNombre() + "'";
            }
            System.out.println("VERDADERO O FALSE::");
            System.out.println(bean.getCategoria().equals("all"));
            if ( bean.getCategoria() != null && !bean.getCategoria().equals("all") ) {
                sql += " AND CATEGORY = '" + bean.getCategoria() + "'"; 
            }
        }
        System.out.println(sql);

        ResultSet resultSet = motorDerby.executeQuery(sql);
        try {
            while (resultSet.next()) {
                Product product = new Product();
                product.setNombre(resultSet.getString(2));
                product.setDescripcion(resultSet.getString(3));
                product.setPrecio(resultSet.getDouble(4));
                product.setImagen(resultSet.getString(5));
                product.setCategoria(resultSet.getString(6));
                productList.add(product);
            }
        } catch (SQLException ex) {
            Logger.getLogger(DAOProduct.class.getName()).log(Level.SEVERE, null, ex);
        }
        motorDerby.close();
        return productList;
    }

}
