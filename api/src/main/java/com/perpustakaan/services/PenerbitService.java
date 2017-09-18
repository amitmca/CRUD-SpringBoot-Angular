/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.services;

import com.perpustakaan.entity.Penerbit;
import com.perpustakaan.repo.PenerbitRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service("penerbitService")
@Transactional
public class PenerbitService {

    @Autowired
    private PenerbitRepo penerbitRepo;

    public Penerbit insertNewPenerbit(Penerbit penerbit) {
        return penerbitRepo.save(penerbit);
    }

    public List<Penerbit> findAllPenerbit() {
        return IteratorUtils.toList(penerbitRepo.findAll().iterator());
    }

    public Penerbit findPenerbitById(Long id) {
        return penerbitRepo.findOne(id);
    }

    public Penerbit updatePenerbit(Penerbit penerbit) {
        return penerbitRepo.save(penerbit);
    }

    public boolean removePenerbit(Long id) {
        penerbitRepo.delete(id);
        return true;
    }

}
