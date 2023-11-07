/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author S2-PC130
 */
public class User {
    private String accountType;
    private String email;
    private String username;
    private String password;
    
    public User(){
    
    }
    
    public User(String accountType, String email, String username, String password ){
        this.accountType = accountType;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public User getUser(){
        return this;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    @Override
    public String toString() {
        return "User{" + "accountType=" + accountType + ", email=" + email + ", username=" + username + ", password=" + password + '}';
    }
    
    
    
}
