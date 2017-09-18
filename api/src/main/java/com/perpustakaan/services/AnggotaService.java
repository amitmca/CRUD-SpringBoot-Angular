/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.services;

import com.perpustakaan.entity.Anggota;
import com.perpustakaan.entity.AnggotaDetail;
import com.perpustakaan.entity.Anggota;
import com.perpustakaan.repo.AnggotaRepo;
import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author User
 */
@Service("anggotaService")
@Transactional
public class AnggotaService implements UserDetailsService {

    @Autowired
    private AnggotaRepo anggotaRepo;

    public Anggota insertAnggota(Anggota anggota) {
        return anggotaRepo.save(anggota);
    }

    public List<Anggota> findAllAnggota() {
        return IteratorUtils.toList(anggotaRepo.findAll().iterator());
    }

    public Anggota findAnggotaById(Long id) {
        return anggotaRepo.findOne(id);
    }

    public Anggota updateAnggota(Anggota anggota) {
        return anggotaRepo.save(anggota);
    }

    public boolean removeAnggota(Long id) {
        anggotaRepo.delete(id);
        return true;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Anggota anggota = anggotaRepo.findByEmail(email);
        if (anggota == null) {
            throw new UsernameNotFoundException("No user present with username: " + email);
        } else {
            List<String> userRoles = new ArrayList<String>();
            userRoles.add("USER");
            return new AnggotaDetail(anggota, userRoles);
        }
    }

    public Anggota register(Anggota anggota) throws java.lang.Exception {
        Anggota temp = anggotaRepo.findByEmail(anggota.getEmail());
        if (temp != null) {
            throw new Exception("Email Already Registered");
        }
        return anggotaRepo.save(anggota);
    }

    public Anggota login(String email, String password) throws Exception {
        Anggota anggota = anggotaRepo.findByEmail(email);
        if (anggota != null) {
            if (!anggota.getPassword().equals(DigestUtils.md5Hex(password))) {
                anggota = null;
                throw new Exception("login Fail");
            } else {
                return anggota;
            }
        } else {
            throw new Exception("Login Fail");
        }
    }

}
