import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import {DataTableModule} from 'primeng/datatable';
import {DataService} from "../data.service";
import { HomeComponent } from './home.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from "primeng/components/growl/growl";
import {ChartModule} from "primeng/components/chart/chart";
import {DataViewModule} from 'primeng/dataview';
import { AddnewreportComponent } from './addnewreport.component';
import { UserMgmtComponent } from './user-mgmt.component';
import { MomentModule } from 'angular2-moment';
import { LoginComponent } from './login.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,DataTableModule,CardModule,ButtonModule,GrowlModule,ChartModule,DataViewModule,MomentModule,InputTextModule,FormsModule
  ],
  declarations: [ReportsComponent, HomeComponent, AddnewreportComponent, UserMgmtComponent, LoginComponent],
  exports: [ReportsComponent,HomeComponent],
  providers: [DataService]
})
export class ReportsModule { }
