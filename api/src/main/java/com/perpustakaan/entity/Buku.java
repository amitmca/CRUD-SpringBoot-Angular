/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 *
 * @author User
 */
@Entity
public class Buku implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true, nullable = false)
    private String kodeBuku;
    private String judul;
    private String pengarang;
    private int jumlah;
    @ManyToOne
    private Penerbit penerbit;

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
     * @return the kodeBuku
     */
    public String getKodeBuku() {
        return kodeBuku;
    }

    /**
     * @param kodeBuku the kodeBuku to set
     */
    public void setKodeBuku(String kodeBuku) {
        this.kodeBuku = kodeBuku;
    }

    /**
     * @return the judul
     */
    public String getJudul() {
        return judul;
    }

    /**
     * @param judul the judul to set
     */
    public void setJudul(String judul) {
        this.judul = judul;
    }

    /**
     * @return the pengarang
     */
    public String getPengarang() {
        return pengarang;
    }

    /**
     * @param pengarang the pengarang to set
     */
    public void setPengarang(String pengarang) {
        this.pengarang = pengarang;
    }

    /**
     * @return the jumlah
     */
    public int getJumlah() {
        return jumlah;
    }

    /**
     * @param jumlah the jumlah to set
     */
    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    /**
     * @return the penerbit
     */
    public Penerbit getPenerbit() {
        return penerbit;
    }

    /**
     * @param penerbit the penerbit to set
     */
    public void setPenerbit(Penerbit penerbit) {
        this.penerbit = penerbit;
    }
}
