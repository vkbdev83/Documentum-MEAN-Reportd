import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router, ActivatedRoute} from '@angular/router';
import {Message} from "primeng/components/common/message";
import {moment} from "ngx-bootstrap/chronos/test/chain";


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  private reportsData : any[];

  private reportKeys: any[];

  private reportId : string;

  data: any;

  msgs: Message[];

  successChartData : any[];

  failChartData:any[];

  constructor(
    private dataservice : DataService,private routes : ActivatedRoute
  ){


  }

  ngOnInit() {

      this.routes.params.subscribe(params =>{

        this.reportId = params['id']

        this.getData();

      });
  }

  getData() {

    this.dataservice.getData(this.reportId).subscribe(results=>{

      //Method for finding all the available keys

      for (let result of results) {

        this.reportKeys = [];

        Object.keys(result).forEach(key =>{

          this.reportKeys.push({"key" : key});

          console.log(this.reportKeys)

        });

        break;

      }


      //Logic for getting the chart data

      this.successChartData =[];

      this.failChartData =[];

      for (let result of results) {

        if(result.status == "RUNNING" ||result.status == "STARTING" ){

          //console.log("Success date " + moment(result.setdate , "DD/MM/YYYY HH:mm:ss").hours());
          this.successChartData.push(moment(result.setdate , "DD/MM/YYYY HH:mm:ss").hours());

        } else if(result.status == "FAILED"){


          //console.log("Fail date " +     moment(result.setdate , "DD/MM/YYYY HH:mm:ss").hours());
          this.failChartData.push(moment(result.setdate , "DD/MM/YYYY HH:mm:ss").hours());

        } else{

        }
      }

      console.log("Success Data" + this.successChartData);
      console.log("fail data" + this.failChartData);
      this.reportsData = results;
      this.getChartData();
    });
  }


  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }


  getChartData() {

    var label = [];
    var successLabel = [];
    var failedLabel =[];

    for (var i = 0; i < 24; i++) {

      label.push(i);
      successLabel[i] =0;
      failedLabel[i] = 0;
    }

    var successValue =[];

    console.log("Success chart data" + JSON.stringify(successLabel));

    console.log("fail chart data" + JSON.stringify(failedLabel));



    for (let succdata of this.successChartData){

      var value = successLabel[succdata];
      console.log("suc value " + JSON.stringify(value));
      value ++;
      successLabel[succdata] = value;

    }

    for (let faildata of this.failChartData){

      var value1 = failedLabel[faildata];
      console.log("fail value " + JSON.stringify(value1));
      value1 ++;
      failedLabel[faildata] = value1;

    }

    console.log("Success chart data" + JSON.stringify(successLabel));

    console.log("fail chart data" + JSON.stringify(failedLabel));

    this.data = {
      labels: label,
      datasets: [
        {
          label: 'Running',
          data: successLabel,
          backgroundColor: '#42A5F5',
          borderColor: '#4bc0c0'
        },
        {
          label: 'Failed',
          data: failedLabel,
          backgroundColor: '#9CCC65',
          borderColor: '#565656'
        }
      ]
    }
  }
}
