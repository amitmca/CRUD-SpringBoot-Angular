/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan.controller;

import com.perpustakaan.entity.Nota;
import com.perpustakaan.services.NotaService;
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
@RequestMapping("/api/nota")
public class NotaController {
    
    @Autowired
    private NotaService notaService;
    
     @RequestMapping(method = RequestMethod.POST)
    public Nota insertNewNota(@RequestBody Nota nota) {
        return notaService.insertNewNota(nota);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Nota> findAllNota() {
        return notaService.findAllNota();
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Nota findNotaById(@PathVariable("id") Long id){
        return notaService.findNotaById(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public Nota updateNota(@RequestBody Nota nota){
        return notaService.insertNewNota(nota);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeNotaById(@PathVariable("id") Long id){
        return notaService.removeNota(id);
    }
}
