/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.ArrayList;

/**
 *
 * @author S2-PC130
 */
public interface DAO<E,I> {
    public String add(E bean);
    public ArrayList<E> findAll(E bean);
}
