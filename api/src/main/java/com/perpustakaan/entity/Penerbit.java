/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 *
 * @author User
 */

@Entity
public class Penerbit  implements Serializable{

    @OneToMany(mappedBy = "penerbit")
    private List<Buku> bukus;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 150,nullable = false)
    private String namaPenerbit;
    @Column(length = 50,nullable = false)
    private String kodePenerbit;

    /**
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return the namaPenerbit
     */
    public String getNamaPenerbit() {
        return namaPenerbit;
    }

    /**
     * @param namaPenerbit the namaPenerbit to set
     */
    public void setNamaPenerbit(String namaPenerbit) {
        this.namaPenerbit = namaPenerbit;
    }

    /**
     * @return the kodePenerbit
     */
    public String getKodePenerbit() {
        return kodePenerbit;
    }

    /**
     * @param kodePenerbit the kodePenerbit to set
     */
    public void setKodePenerbit(String kodePenerbit) {
        this.kodePenerbit = kodePenerbit;
    }
}
