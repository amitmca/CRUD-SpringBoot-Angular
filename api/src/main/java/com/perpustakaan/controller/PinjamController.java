/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


package com.perpustakaan.controller;

import com.perpustakaan.entity.Pinjam;
import com.perpustakaan.services.PinjamService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author MICI
 */
@RestController
@RequestMapping("/api/pinjam")
public class PinjamController {
    
        @Autowired
    private PinjamService pinjamService;

    @RequestMapping(method = RequestMethod.POST)
    public Pinjam insertNewPinjam(@RequestBody Pinjam pinjam) {
        return pinjamService.insertNewPinjam(pinjam);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Pinjam> findAllPinjam() {
        return pinjamService.findAllPinjam();
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Pinjam findPinjamById(@PathVariable("id") Long id){
        return pinjamService.findPinjamById(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public Pinjam updatePinjam(@RequestBody Pinjam pinjam){
        return pinjamService.insertNewPinjam(pinjam);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removePinjamById(@PathVariable("id") Long id){
        return pinjamService.removePinjam(id);
    }
    
}
