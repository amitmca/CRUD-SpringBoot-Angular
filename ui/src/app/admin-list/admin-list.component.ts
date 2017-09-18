import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Admin } from "../interface/admin";
import { AdminService } from "../services/admin.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { NgProgressService } from "ngx-progressbar";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[] = [];
  newAdmin: Admin = new Admin();
  error: string;
  isError: boolean = false;
  insertNew: boolean = false;
  isEdit: boolean = false;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    public progressService: NgProgressService) {
    this.loadAdminData();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onInsert() {
    this.insertNew = true;
  }

  onInsertNewAdmin() {
    this.progressService.start();
    this
      .adminService
      .saveNewAdmin(this.newAdmin)
      .subscribe(output => {
        this.progressService.done();
        this.toastr.success('Admin berhasil disimpan.', null, { toastLife: 3000 });
        console.log(output);
        this.router.navigate(["list-admin"]);
        this.newAdmin = new Admin();
        this.loadAdminData();
      }, error => {
        console.log(error);
        this.progressService.done();
        this.toastr.error('Telah Terjadi Error', 'Oops!', { toastLife: 3000 });
      });

  }

  loadAdminData() {
    this.progressService.start();
    this.adminService.findAllAdmin().subscribe(output => {
      console.log(output);
      this.admins = output;
      this.progressService.done();
    }, error => {
      this.isError = error;
      this.progressService.done();
      this.toastr.error('Telah Terjadi Error', 'Oops!', { toastLife: 3000 });
    });
  }

  onRemoveAdmin(id: string) {
    this.progressService.start();
    console.log(id);
    this.adminService.deleteAdmin(id).subscribe(data => {
      if (data) {
        this.loadAdminData();
        this.progressService.done();
        this.toastr.success('Admin berhasil dihapus.', null, { toastLife: 3000 });
      }
    }, error => {
      this.isError = error;
      this.progressService.done();
      this.toastr.error('Telah Terjadi Error', 'Oops!', { toastLife: 3000 });
    });
  }


  onUpdateAdmin() {
    this.progressService.start();
    this.adminService.updateAdmin(this.newAdmin).subscribe(output => {
      this.loadAdminData();
      this.newAdmin = new Admin();
      this.insertNew = false;
      this.progressService.done();
      this.toastr.success('Admin berhasil diupdate.', null, { toastLife: 3000 });
    }, error => {
      this.isError = true;
      this.error = error;
      console.log(error);
      this.progressService.done();
      this.toastr.error('Telah Terjadi Error', 'Oops!', { toastLife: 3000 });
    });
  }

  onEdit(admin) {
    this.isEdit = true;
    this.newAdmin = admin;
    this.insertNew = true;
  }

}
