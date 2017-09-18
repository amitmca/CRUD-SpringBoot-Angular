/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.repo;

import com.perpustakaan.entity.Pinjam;
import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author MICI
 */
public interface PinjamRepo extends CrudRepository<Pinjam, Serializable>{
    
}
