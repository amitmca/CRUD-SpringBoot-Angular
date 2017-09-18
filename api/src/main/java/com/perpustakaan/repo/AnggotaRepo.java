/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.repo;

import com.perpustakaan.entity.Anggota;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author User
 */
public interface AnggotaRepo extends CrudRepository<Anggota, Long>{
     @Query("SELECT an FROM Anggota an WHERE LOWER(an.email) = LOWER(:email)")
    public Anggota findByEmail(@Param("email") String email);
}
