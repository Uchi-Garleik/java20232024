/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author Uchi
 */
public class Product {
    private String nombre;
    private String descripcion;
    private double precio;
    private String imagen;
    private String categoria;
    
    public Product(){}

    public Product(String nombre, String descripcion, double precio, String imagen, String categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public void setImagen(String imagen){
        this.imagen = imagen;
    }
    
    public String getImagen(){
        return imagen;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return "Product{" + "nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio + ", imagen=" + imagen + ", categoria=" + categoria + '}';
    }

    

 
    
    
    
    
    
}
