import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Angsuran } from "../interface/angsuran";
import { AngsuranService } from "../services/angsuran.service";
import { Gadai } from "../interface/gadai";
import { GadaiService } from "../services/gadai.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";

@Component({
  selector: 'app-angsuran',
  templateUrl: './angsuran.component.html',
  styleUrls: ['./angsuran.component.css']
})
export class AngsuranComponent implements OnInit {

  newAngsuran: Angsuran = new Angsuran();
  newGadai: Gadai = new Gadai();
  angsurans: Angsuran[] = [];
  gadais: Gadai[] = [];

  isError: boolean = false;
  error: string;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(
    private angsuranService: AngsuranService,
    private gadaiService: GadaiService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService
  ) {
    this.loadAngsuranData();
    this.loadGadaiData();
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.loadGadaiData();
  }

  loadAngsuranData(){
    this.progressService.start();
    this
    .angsuranService
    .findAllAngsuran()
    .subscribe(output => {
      this.progressService.done();
      console.log(output);
      this.angsurans = output;
    }, error => {
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  loadGadaiData(){
    this.progressService.start();
    this
    .gadaiService
    .findAllGadai()
    .subscribe(output => {
      this.progressService.done();
      console.log(output);
      this.gadais = output;
    }, error => {
      this.progressService.done();
      this.isError = true;
      this.error = error;
      console.log(error);
    });
  }

  onInsert() {
    this.insertNew = !this.insertNew;
    this.newAngsuran = new Angsuran();
    var d = new Date, dformat = [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-');
    this.newAngsuran.tglAngsuran = dformat.toString();
  }

  // onSelect(kodeGadai){
  //   this.newGadai = new Gadai();
  //   this.gadaiService.findAllGadai().subscribe(output=>{
  //     this.gadais = output;
  //     this.newAngsuran.jmlAngsuran = this.newGadai.jmlAngsuran;
  //   });
  // }

  onInsertNewAngsuran() {
    this.progressService.start();
    this
      .angsuranService
      .insertAngsuran(this.newAngsuran)
      .subscribe(output => {
        this.progressService.done();
        this.toastr.success('Angsuran Berhasil Disimpan.', null, {toastLife: 3000});
        console.log(output);
        this.newAngsuran = new Angsuran();
        this.loadAngsuranData();
      }, error => {
        console.log(error);
        this.progressService.done();
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onEdit(angsuran) {
    this.isEdit = true;
    this.newAngsuran = angsuran;
    this.insertNew = true;
    this.newAngsuran.kekurangan = this.newAngsuran.kekurangan - this.newAngsuran.jmlAngsuran;
    var d = new Date, dformat = [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-');
    this.newAngsuran.tglAngsuran = dformat.toString();
  }

  onUpdateAngsuran() {
    this
      .angsuranService
      .updateAngsuran(this.newAngsuran)
      .subscribe(output => {
        console.log(output);
        this.loadAngsuranData();
        this.newAngsuran = new Angsuran();
        this.insertNew = false;
        this.toastr.success('Angsuran Berhasil Disimpan.', null, {toastLife: 3000});
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onRemoveAngsuran(id: string) {
    this
      .angsuranService
      .deleteAngsuran(id)
      .subscribe(data => {
        if (data) {
          this.toastr.success('Angsuran Berhasil Dihapus!', null, {toastLife: 3000});
          this.loadAngsuranData();
        }
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  compareFn(c1: Gadai, c2: Gadai): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
