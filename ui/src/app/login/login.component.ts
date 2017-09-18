import { Component, OnInit } from '@angular/core';
import { Admin } from "../interface/admin";
import { AdminService } from "../services/admin.service";
import { Router } from "@angular/router";
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  login: Admin = new Admin();

  constructor(private adminService:AdminService,
              private router:Router) { }

  onProcessLogin(){
    //this.progressService.start();
    this.adminService.login(this.login).subscribe(output=>{
      console.log(output);
      if(output){
        //this.progressService.done();
        let hash = Md5.hashStr(this.login.password).toString();
        let token = btoa(this.login.email + ':' + hash);
        localStorage.setItem('token',token);  
        console.log('Token: ' + localStorage.getItem('token'));      
        this.router.navigate(["home"]);    
      }else{
        console.log(output);
        //this.progressService.done();
        //this.toastr.error('Login fail.', null, {toastLife: 3000});     
      }
    },error=>{
      console.log(error);
       //this.progressService.done();
       //this.toastr.error(error, null, {toastLife: 3000}); 
    });
  }

}
