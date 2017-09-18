/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.controller;

import com.perpustakaan.entity.Buku;
import com.perpustakaan.services.BukuService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/api/buku")
public class BukuController {

    @Autowired
    private BukuService bukuService;

    @RequestMapping(method = RequestMethod.POST)
    public Buku insertNewBuku(@RequestBody Buku buku) {
        return bukuService.insertNewBuku(buku);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Buku> findAllBuku() {
        return bukuService.findAllBuku();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Buku findBukuById(@PathVariable("id") Long id) {
        return bukuService.findBukuById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Buku updateBuku(@RequestBody Buku buku) {
        return bukuService.insertNewBuku(buku);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeBukuById(@PathVariable("id") Long id) {
        return bukuService.removeBuku(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/penerbit/(id)")
    public List<Buku> findByPenerbitId(@PathVariable("id") Long id) {
        return bukuService.findByPenerbitId(id);
    }
    
}
