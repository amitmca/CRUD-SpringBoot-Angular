import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Admin } from "../interface/admin";
import {Router} from "@angular/router";
//import {NgProgressService} from "ngx-progressbar";
//import {ToastsManager} from "ng2-toastr/ng2-toastr";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-admin-input',
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.css']
})
export class AdminInputComponent implements OnInit {

  newAdmin: Admin = new Admin();
    isError: boolean = false;
    error:string;
  
    constructor(private adminService: AdminService,
                
                private router: Router,
                //public progressService: NgProgressService,
                //private toastr: ToastsManager, 
                private vcr: ViewContainerRef) {
                  //this.toastr.setRootViewContainerRef(vcr);
                }
  
    ngOnInit() {
    }
  
    onInsertNewAdmin(){
      //this.progressService.start();
      this
        .adminService
        .saveNewAdmin(this.newAdmin)
        .subscribe(output=>{
          //this.progressService.done();
          //this.toastr.success('Employee saved.', null, {toastLife: 3000});
          console.log(output);
          this.router.navigate(["admin-list"]);
          this.newAdmin = new Admin();
        },error=>{
          console.log(error);
          //this.progressService.done();
          //sthis.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
        });

    }
  
}
