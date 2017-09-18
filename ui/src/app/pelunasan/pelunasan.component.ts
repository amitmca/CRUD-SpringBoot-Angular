import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Pelunasan } from "../interface/pelunasan";
import { Nasabah } from "../interface/nasabah";
import { NasabahService } from "../services/nasabah.service";
import { PelunasanService } from "../services/pelunasan.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";

@Component({
  selector: 'app-pelunasan',
  templateUrl: './pelunasan.component.html',
  styleUrls: ['./pelunasan.component.css']
})
export class PelunasanComponent implements OnInit {

  newPelunasan: Pelunasan = new Pelunasan();
  pelunasans: Pelunasan[] = [];
  nasabahs: Nasabah[] = [];

  isError: boolean = false;
  error: string;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(private nasabahService: NasabahService,
    private pelunasanService: PelunasanService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService ) {
    this.loadNasabahData();
    this.loadPelunasanData();
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
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  loadPelunasanData() {
    this.progressService.start();
    this
      .pelunasanService
      .findAllPelunasan()
      .subscribe(output => {
        this.progressService.done();
        console.log(output);
        this.pelunasans = output;
      }, error => {
        this.progressService.done();
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onInsert() {
    this.insertNew = !this.insertNew;
    this.newPelunasan = new Pelunasan();
  }

  onInsertNewPelunasan() {
    this.progressService.start();
    this
      .pelunasanService
      .insertPelunasan(this.newPelunasan)
      .subscribe(output => {
        this.progressService.done();
        this.toastr.success('Pelunasan Berhasil Disimpan.', null, {toastLife: 3000});
        console.log(output);
        this.newPelunasan = new Pelunasan();
        this.loadPelunasanData();
      }, error => {
        console.log(error);
        this.progressService.done();
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onEdit(pelunasan) {
    this.isEdit = true;
    this.newPelunasan = pelunasan;
    this.insertNew = true;
  }

  onUpdatePelunasan() {
    this
      .pelunasanService
      .updatePelunasan(this.newPelunasan)
      .subscribe(output => {
        console.log(output);
        this.loadPelunasanData();
        this.newPelunasan = new Pelunasan();
        this.insertNew = false;
        this.toastr.success('Pelunasan Berhasil Disimpan.', null, {toastLife: 3000});
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  onRemovePelunasan(id: string) {
    this
      .pelunasanService
      .deletePelunasan(id)
      .subscribe(data => {
        if (data) {
          this.toastr.success('Pelunasan Berhasil Dihapus!', null, {toastLife: 3000});
          this.loadPelunasanData();
        }
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
        this.toastr.error('Ada yang salah, coba lagi', 'Aduh!',  {toastLife: 3000});
      });
  }

  compareFn(c1: Nasabah, c2: Nasabah): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
