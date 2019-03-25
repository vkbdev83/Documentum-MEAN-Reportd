import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {ReportsModule} from './reports/reports.module';
import {HomeComponent} from "./reports/home.component";
import {ReportsComponent} from "./reports/reports.component";
import {RouterModule, Routes} from "@angular/router";
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from 'primeng/button';
import {AddnewreportComponent} from "./reports/addnewreport.component";
import {UserMgmtComponent} from "./reports/user-mgmt.component";
import {AuthGuard} from "./reports/auth-guard.service";
import {LoginComponent} from "./reports/login.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'reports/:id', component: ReportsComponent,canActivate: [AuthGuard] },
  { path: 'addnew', component: AddnewreportComponent,canActivate: [AuthGuard] },
  { path: 'usermgmt', component: UserMgmtComponent,canActivate: [AuthGuard] }

];


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,HttpModule,ReportsModule,MenubarModule,PanelModule,BrowserAnimationsModule,ButtonModule,RouterModule.forRoot(
      appRoutes)  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule { }


