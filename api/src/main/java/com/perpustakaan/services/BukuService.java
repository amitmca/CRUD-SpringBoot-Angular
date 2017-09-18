/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.services;

import com.perpustakaan.entity.Buku;
import com.perpustakaan.repo.BukuRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service("bukuService")
@Transactional
public class BukuService {

    @Autowired
    private BukuRepo bukuRepo;

    public Buku insertNewBuku(Buku buku) {
        return bukuRepo.save(buku);
    }

    public List<Buku> findAllBuku() {
        return IteratorUtils.toList(bukuRepo.findAll().iterator());
    }

    public Buku findBukuById(Long id) {
        return bukuRepo.findOne(id);
    }

    public Buku updateBuku(Buku buku) {
        return bukuRepo.save(buku);
    }

    public boolean removeBuku(Long id) {
        bukuRepo.delete(id);
        return true;
    }

    public List<Buku> findByPenerbitId(Long penerbitId) {
        return bukuRepo.findByPenerbitId(penerbitId);
    }

}
