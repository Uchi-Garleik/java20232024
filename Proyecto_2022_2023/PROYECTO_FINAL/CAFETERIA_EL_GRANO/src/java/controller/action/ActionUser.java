/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller.action;

import dao.DAOUser;
import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.User;

/**
 *
 * @author S2-PC130
 */
public class ActionUser {
    
    public String execute(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        String answer = "";
        String action = httpServletRequest.getParameter("action");
        String[] method = action.split("\\.");
        switch(method[1]){
            case "SIGNUP":
                System.out.println("...signing up");
                answer = signUp(httpServletRequest, httpServletResponse);
                break;
            case "SIGNIN":
                System.out.println("...signing in");
                answer = signIn(httpServletRequest, httpServletResponse);
                break;
        }
        return answer;
    }
    
    public String signUp(HttpServletRequest request, HttpServletResponse response){
          User user = new User(request.getParameter("account-type"), request.getParameter("email"), request.getParameter("username"), request.getParameter("password"));
          return (new DAOUser().add(user));
//          return (new DAOUser().add(user));
    }
    
    public String signIn(HttpServletRequest request, HttpServletResponse response){
        String answer = "";
        User user = new User();
        user.setUsername(request.getParameter("username"));
        user.setPassword(request.getParameter("password"));
        ArrayList<User> logUser = new DAOUser().findAll(user);
        if (!logUser.isEmpty()) {
            HttpSession session = request.getSession(true);
            session.setAttribute("USERNAME", logUser.get(0).getUsername());
            session.setAttribute("EMAIL", logUser.get(0).getEmail());
            session.setAttribute("ACCOUNTTYPE", logUser.get(0).getAccountType());
            
            Cookie cookieEmail = new Cookie("email", (String) session.getAttribute("EMAIL"));
            cookieEmail.setPath("/");
            cookieEmail.setMaxAge(60*60*24);
            response.addCookie(cookieEmail);
            
            Cookie cookieAccountType = new Cookie("accounttype", (String) session.getAttribute("ACCOUNTTYPE"));
            cookieAccountType.setMaxAge(60*60*24);
            cookieAccountType.setPath("/");
            response.addCookie(cookieAccountType);
            
            
            Cookie cookieUsername = new Cookie("username", (String) session.getAttribute("USERNAME"));
            cookieUsername.setMaxAge(60 * 60 * 24);
            cookieUsername.setPath("/");         
            response.addCookie(cookieUsername);
            
            answer = "Login correct";
        } else {
            answer = "Login information incorrect";
        }
        return answer;
    }
    
}
