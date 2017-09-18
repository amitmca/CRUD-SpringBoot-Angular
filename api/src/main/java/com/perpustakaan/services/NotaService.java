/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.services;

import com.perpustakaan.entity.Nota;
import com.perpustakaan.repo.NotaRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author MICI
 */
@Service("notaService")
@Transactional
public class NotaService {
    
    @Autowired
    private NotaRepo notaRepo;
    
    public Nota insertNewNota(Nota nota){
        return notaRepo.save(nota);
    }
    
    public List<Nota> findAllNota(){
        return IteratorUtils.toList(notaRepo.findAll().iterator());
    }
    
    public Nota findNotaById(Long id){
        return notaRepo.findOne(id);
    }
    
    public Nota updateNota(Nota nota){
        return notaRepo.save(nota);
    }
    
    public boolean removeNota(Long id){
        notaRepo.delete(id);
        return true;
    }
}
