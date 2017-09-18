/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.repo;

import com.perpustakaan.entity.Buku;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author User
 */
public interface BukuRepo extends CrudRepository<Buku, Long> {

    @Query("SELECT b FROM Buku b where b.penerbit.id= :penerbitId")
    public List<Buku> findByPenerbitId(@Param("penerbitId") Long penerbitId);
}
