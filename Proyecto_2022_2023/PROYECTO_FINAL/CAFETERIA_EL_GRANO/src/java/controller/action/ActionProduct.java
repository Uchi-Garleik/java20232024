/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.action;

import com.google.gson.Gson;
import connection.MotorDerby;
import dao.DAOProduct;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Product;

/**
 *
 * @author S2-PC130
 */
public class ActionProduct {
    MotorDerby motorDerby;
    
    public ActionProduct(){
        motorDerby = new MotorDerby();
    }
    
    public String execute(HttpServletRequest request, HttpServletResponse response){
        String answer = "";
        String action = request.getParameter("action");
        String[] method = action.split("\\.");
        System.out.println(method[1]);
        switch(method[1]){
//            case "REGISTER":
//                register(request, response);
//                answer = "TODO: make register return something ig";
//                break;
            case "FILTER":
                System.out.println("VAMO A FILTRAH");
                answer = filter(request, response);
                break;
        }
        return answer;
    }
    
//    private void register(HttpServletRequest request, HttpServletResponse response){
//        String productName = request.getParameter("nombre-producto");
//        String productCategory = request.getParameter("categoria-producto");
//        Product product = new Product(productName, productCategory);
//        System.out.println(product.toString());    
//        new DAOProduct().add(product);
//    }
 
    private String filter(HttpServletRequest request, HttpServletResponse response){
        Product product = new Product();
        product.setCategoria(request.getParameter("category"));
        System.out.println(product.toString());
        ArrayList<Product> productList = new ArrayList<>();
        productList = new DAOProduct().findAll(product);
        if (!productList.isEmpty()) {
            System.out.println("am i getting here");
            Gson gson = new Gson();
            String json = gson.toJson(productList);
            out.print(json);
            return json;
        }
        return "nothin";
    }
    
}
