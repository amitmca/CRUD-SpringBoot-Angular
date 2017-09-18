import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminInputComponent } from './admin-input/admin-input.component';
import { AuthGuard } from "./guards/auth.guard";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AdminService } from "./services/admin.service";
import { HttpModule } from "@angular/http";
import { NasabahComponent } from './nasabah/nasabah.component';
import { NasabahService } from "./services/nasabah.service";
import { PelunasanComponent } from './pelunasan/pelunasan.component';
import { PelunasanService } from "./services/pelunasan.service";
import { GadaiListComponent } from './gadai-list/gadai-list.component';
import { GadaiInputComponent } from './gadai-input/gadai-input.component';
import { GadaiService } from "./services/gadai.service";
import { AngsuranComponent } from './angsuran/angsuran.component';
import { AngsuranService } from "./services/angsuran.service";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


export const AppRoutes:any=[
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "list-admin", component: AdminListComponent, canActivate: [AuthGuard] },
  { path: "insert-admin", component: AdminInputComponent, canActivate: [AuthGuard] },
  { path: "nasabah", component: NasabahComponent, canActivate: [AuthGuard] },
  { path: "pelunasan", component: PelunasanComponent, canActivate: [AuthGuard] },
  { path: "list-gadai", component: GadaiListComponent, canActivate: [AuthGuard] },
  { path: "insert-gadai", component: GadaiInputComponent, canActivate: [AuthGuard] },
  { path: "angsuran", component: AngsuranComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminListComponent,
    AdminInputComponent,
    NasabahComponent,
    PelunasanComponent,
    GadaiListComponent,
    GadaiInputComponent,
    AngsuranComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    NgProgressModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [AdminService, NasabahService, PelunasanService, GadaiService, AngsuranService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
