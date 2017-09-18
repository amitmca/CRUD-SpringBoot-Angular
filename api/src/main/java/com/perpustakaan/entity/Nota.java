/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;

/**
 *
 * @author MICI
 */
@Entity
public class Nota implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private Pinjam pinjam;
    @ManyToOne
    private Buku buku;
    @ManyToOne
    private Admin admin;
    @Temporal(javax.persistence.TemporalType.DATE)
    @Column(nullable = false)
    private Date tglPinjam;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tglHarusKembali;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tglKembali;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the pinjam
     */
    public Pinjam getPinjam() {
        return pinjam;
    }

    /**
     * @param pinjam the pinjam to set
     */
    public void setPinjam(Pinjam pinjam) {
        this.pinjam = pinjam;
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
     * @return the admin
     */
    public Admin getAdmin() {
        return admin;
    }

    /**
     * @param admin the admin to set
     */
    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    /**
     * @return the tglPinjam
     */
    public Date getTglPinjam() {
        return tglPinjam;
    }

    /**
     * @param tglPinjam the tglPinjam to set
     */
    public void setTglPinjam(Date tglPinjam) {
        this.tglPinjam = tglPinjam;
    }

    /**
     * @return the tglHarusKembali
     */
    public Date getTglHarusKembali() {
        return tglHarusKembali;
    }

    /**
     * @param tglHarusKembali the tglHarusKembali to set
     */
    public void setTglHarusKembali(Date tglHarusKembali) {
        this.tglHarusKembali = tglHarusKembali;
    }

    /**
     * @return the tglKembali
     */
    public Date getTglKembali() {
        return tglKembali;
    }

    /**
     * @param tglKembali the tglKembali to set
     */
    public void setTglKembali(Date tglKembali) {
        this.tglKembali = tglKembali;
    }

}
