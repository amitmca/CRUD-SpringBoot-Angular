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
 * @author MICI
 */
@Entity
public class Pinjam implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Buku buku;
    @ManyToOne
    private Anggota anggota;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the buku
     */
    public Buku getBuku() {
        return buku;
    }

    /**
     * @param buku the buku to set
     */
    public void setBuku(Buku buku) {
        this.buku = buku;
    }

    /**
     * @return the anggota
     */
    public Anggota getAnggota() {
        return anggota;
    }

    /**
     * @param anggota the anggota to set
     */
    public void setAnggota(Anggota anggota) {
        this.anggota = anggota;
    }

}
