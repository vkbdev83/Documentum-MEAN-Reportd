import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ButtonModule} from 'primeng/button';
import {Router} from "@angular/router";
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private reports : any[];
  private items: MenuItem[];


  constructor(
    private dataservice : DataService,private router: Router
  ){



  }

  ngOnInit() {
      this.getReports();
    this.items = [
      {
        label: 'Reports',
      },
      {
        label: 'Admin',
      }
    ];
  }


  getReports(){

      this.dataservice.getReports().subscribe(results => {

        this.reports = results;
      });
  }


  handleClick(reportId : string){

    console.log("Report" + reportId);

    this.router.navigate(['/reports',reportId])


  }



}
