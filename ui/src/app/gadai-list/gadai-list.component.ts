import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Gadai } from "../interface/gadai";
import { GadaiService } from "../services/gadai.service";
import { Router } from "@angular/router";
import { Nasabah } from "../interface/nasabah";
import { NasabahService } from "../services/nasabah.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";

@Component({
  selector: 'app-gadai-list',
  templateUrl: './gadai-list.component.html',
  styleUrls: ['./gadai-list.component.css']
})
export class GadaiListComponent implements OnInit {

  gadais:Gadai[]=[];
  nasabahs: Nasabah[] = [];
  newGadai:Gadai = new Gadai();

  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private gadaiService:GadaiService,
              private nasabahService: NasabahService,
              private router:Router,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef,
              public progressService: NgProgressService) {
                this.loadGadaiData();
                this.toastr.setRootViewContainerRef(vcr);
                //this.loadNasabahData();
               }

  ngOnInit() {
    this.loadNasabahData();
  }

  loadNasabahData() {
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
      this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
    });
  }

  loadGadaiData(){
    this.progressService.start();
    this
    .gadaiService
    .findAllGadai()
    .subscribe(output=>{
      console.log(output);
      this.gadais=output;
      this.progressService.done();
    },error=>{
      this.isError=true;
      this.error=error;
      console.log(error);
      this.progressService.done();
      this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
    });
  }

  onInsert(){
    this.insertNew = true;
    this.newGadai = new Gadai();
  }

  onEdit(gadai){
    this.isEdit = true;
    this.newGadai = gadai;
    this.insertNew = true;
  }

  onDetail(gadai){
    this.isEdit = true;
    this.newGadai = gadai;
    this.insertNew = true;
  }

  onUpdateGadai(){
    this.progressService.start();
    this
      .gadaiService
      .updateGadai(this.newGadai)
      .subscribe(output=>{
        console.log(output);
        this.loadGadaiData();
        this.newGadai = new Gadai();
        this.insertNew = false;
        this.progressService.done();
        this.toastr.success('Gadai Berhasil Disimpan!', null, {toastLife: 3000});
      },error=>{
        this.isError=true;
        this.error = error;
        console.log(error);
        this.progressService.done();
        this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
      });
  }

  onRemoveGadai(id:string){
    this.progressService.start();
    this
      .gadaiService
      .deleteGadai(id)
      .subscribe(data=>{
        if(data){
          this.toastr.success('Gadai Berhasil Dihapus!', null, {toastLife: 3000});
          this.loadGadaiData();
          this.progressService.done();
        }
      },error=>{
        this.isError=true;
        this.error=error;
        console.log(error);
        this.progressService.done();
        this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
      });
  }

  compareFn(c1: Nasabah, c2: Nasabah): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onPrint(){
    
  }
  

}
