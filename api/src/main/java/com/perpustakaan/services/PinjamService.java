/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.services;

import com.perpustakaan.entity.Pinjam;
import com.perpustakaan.repo.PinjamRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MICI
 */
@Service("pinjamService")
@Transactional
public class PinjamService {
    
    @Autowired
    private PinjamRepo pinjamRepo;
    
    public Pinjam insertNewPinjam(Pinjam pinjam){
        return pinjamRepo.save(pinjam);
    }
    
    public List<Pinjam> findAllPinjam(){
        return IteratorUtils.toList(pinjamRepo.findAll().iterator());
    }
    
    public Pinjam findPinjamById(Long id){
        return pinjamRepo.findOne(id);
    }
    
    public Pinjam updatePinjam(Pinjam pinjam){
        return pinjamRepo.save(pinjam);
    }
    
    public boolean removePinjam(Long id){
        pinjamRepo.delete(id);
        return true;
    }
    
}
