import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NasabahService } from "../services/nasabah.service";
import { Router } from "@angular/router";
import { Nasabah } from "../interface/nasabah";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";

@Component({
  selector: 'app-nasabah',
  templateUrl: './nasabah.component.html',
  styleUrls: ['./nasabah.component.css']
})
export class NasabahComponent implements OnInit {

  newNasabah:Nasabah = new Nasabah();
  nasabahs:Nasabah[]=[];

  isError:boolean=false;
  error:string;
  insertNew:boolean=false;
  isEdit:boolean=false;

  constructor(private nasabahService: NasabahService,
              private router:Router,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef,
              public progressService: NgProgressService) { 
                this.loadNasabahData();
                this.toastr.setRootViewContainerRef(vcr);
              }

  ngOnInit() {
  }

  onInsert(){
    this.insertNew = true;
    this.newNasabah = new Nasabah();
  }

  onInsertNewNasabah(){
    this.progressService.start();
    this
      .nasabahService
      .insertNasabah(this.newNasabah)
      .subscribe(output=>{
        this.progressService.done();
        this.toastr.success('Nasabah Berhasil Disimpan.', null, {toastLife: 3000});
        console.log(output);
        this.newNasabah = new Nasabah();
        this.loadNasabahData();
      },error=>{
        console.log(error);
        this.progressService.done();
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  loadNasabahData(){
    this.progressService.start();
    this
      .nasabahService
      .findAllNasabah()
      .subscribe(output=>{
        this.progressService.done();
        console.log(output);
        this.nasabahs=output;
      },error=>{
        this.progressService.done();
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onEdit(nasabah){
    this.isEdit = true;
    this.newNasabah = nasabah;
    this.insertNew = true;
  }

  onUpdateNasabah(){
    this
      .nasabahService
      .updateNasabah(this.newNasabah)
      .subscribe(output=>{
        console.log(output);
        this.loadNasabahData();
        this.newNasabah = new Nasabah();
        this.insertNew = false;
        this.toastr.success('Nasabah Berhasil Disimpan.', null, {toastLife: 3000});
      },error=>{
        this.isError=true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onRemoveNasabah(id:string){
    this
      .nasabahService
      .deleteNasabah(id)
      .subscribe(data=>{
        if(data){
          this.toastr.success('Nasabah Berhasil Dihapus!', null, {toastLife: 3000});
          this.loadNasabahData();
        }
      },error=>{
        this.isError=true;
        this.error=error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

}
