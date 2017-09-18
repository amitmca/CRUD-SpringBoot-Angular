/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.controller;

import com.perpustakaan.dto.LoginObject;
import com.perpustakaan.entity.Anggota;
import com.perpustakaan.services.AnggotaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author User
 */
@RestController
@RequestMapping("/api/anggota")
public class AnggotaController {
    
    @Autowired
    private AnggotaService anggotaService;
    
    @RequestMapping(method = RequestMethod.POST)
    public Anggota insertNewAnggota(@RequestBody Anggota anggota){
        return anggotaService.insertAnggota(anggota);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Anggota> findAllAnggota(){
        //tadi salah
        return anggotaService.findAllAnggota();
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Anggota findAnggotaById(@PathVariable("id")Long id){
        return anggotaService.findAnggotaById(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public Anggota updateAnggota(@RequestBody Anggota anggota){
        return anggotaService.insertAnggota(anggota);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeAnggotaById(@PathVariable("id")Long id){
        return anggotaService.removeAnggota(id);
    }
    
      
    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public Anggota registerAnggota(@RequestBody Anggota anggota) throws Exception{
        return anggotaService.register(anggota);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public Anggota loginAnggota(@RequestBody LoginObject login) throws Exception{
        return anggotaService.login(login.getEmail(), login.getPassword());
    }
}
