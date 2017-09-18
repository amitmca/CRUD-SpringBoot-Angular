import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Gadai } from "../interface/gadai";
import { GadaiService } from "../services/gadai.service";
import { Router } from "@angular/router";
import { NasabahService } from "../services/nasabah.service";
import { Nasabah } from "../interface/nasabah";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";
import { MdDatepicker, MdDateFormats } from '@angular/material';

@Component({
  selector: 'app-gadai-input',
  templateUrl: './gadai-input.component.html',
  styleUrls: ['./gadai-input.component.css']
})
export class GadaiInputComponent implements OnInit {
  nasabahs: Nasabah[] = [];
  newGadai: Gadai = new Gadai();
  isError: boolean = false;
  error: string;

  dates: Date = new Date();

  constructor(private gadaiService: GadaiService,
    private nasabahService: NasabahService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService) {
    this.loadNasabahData();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.loadNasabahData();
  }

  loadNasabahData() {
    this.progressService.start();
    this
      .nasabahService
      .findAllNasabah()
      .subscribe(output => {
        this.progressService.done();
        console.log(output);
        this.nasabahs = output;
      }, error => {
        this.progressService.done();
        this.isError = true;
        this.error = error;
        console.log(error);
      });
  }

  onInsertNewGadai() {
    this.progressService.start();
    this
      .gadaiService
      .insertGadai(this.newGadai)
      .subscribe(output => {
        this.progressService.done();
        this.toastr.success('Data Gadai Berhasil Disimpan.', null, { toastLife: 3000 });
        console.log(output);
        this.router.navigate(["list-gadai"]);
        this.newGadai = new Gadai();  
      }, error => {
        console.log(error);
        this.progressService.done();
        this.toastr.error('Something wrong, try again', 'Oops!', { toastLife: 3000 });
      });

  }

  onHitung() {
    if (this.newGadai.karat == 1) {
      this.newGadai.harga = 10000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 2) {
      this.newGadai.harga = 19000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 3) {
      this.newGadai.harga = 43000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 4) {
      this.newGadai.harga = 66000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 5) {
      this.newGadai.harga = 90000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 6) {
      this.newGadai.harga = 114000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 7) {
      this.newGadai.harga = 137000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 8) {
      this.newGadai.harga = 160000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 9) {
      this.newGadai.harga = 185000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 10) {
      this.newGadai.harga = 200000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 11) {
      this.newGadai.harga = 232000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 12) {
      this.newGadai.harga = 255000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 13) {
      this.newGadai.harga = 280000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 14) {
      this.newGadai.harga = 303000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 15) {
      this.newGadai.harga = 327000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 16) {
      this.newGadai.harga = 350000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 17) {
      this.newGadai.harga = 374000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 18) {
      this.newGadai.harga = 398000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 19) {
      this.newGadai.harga = 420000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 20) {
      this.newGadai.harga = 445000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 21) {
      this.newGadai.harga = 468000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 22) {
      this.newGadai.harga = 492000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 23) {
      this.newGadai.harga = 515000 * this.newGadai.berat;
    } else if (this.newGadai.karat == 24) {
      this.newGadai.harga = 540000 * this.newGadai.berat;
    } else {
      this.toastr.error('Isikan Karat 1 - 24 !', 'Oops', { toastLife: 3000 });
    }

    this.newGadai.pinjaman = (this.newGadai.harga * 80) / 100;


  }

  onHitung2() {
    this.newGadai.jmlAngsuran = this.newGadai.pinjaman/this.newGadai.lamaAngsuran;

    this.newGadai.totalTebusan = (this.newGadai.pinjaman * (this.newGadai.bunga)/100)
      + this.newGadai.pinjaman;

    var t = new Date, dformat = [t.getFullYear(), t.getMonth()+1, t.getDate()].join('-');
    this.newGadai.tglGadai = dformat.toString();
    
    var x = new Date(), yformat = [(t.getFullYear())+1, t.getMonth()+1, t.getDate()].join('-');
    this.newGadai.tgljatuhTempo = yformat.toString();
  
  }

}
