import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, ResponseContentType, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) { }


  getData(reportId : string):Observable<any>{

    console.log("Report Id " + reportId);

    let myParams = new URLSearchParams();

    myParams.append('reportid',reportId);

    let options = new RequestOptions({responseType: ResponseContentType.Json,params: myParams});

  return this.http.get("http://localhost:3000/" + reportId,options).map(result => result.json());

}

  getReports():Observable<any>{

    let options = new RequestOptions({responseType: ResponseContentType.Json });

    return this.http.get("http://localhost:3000/getreports",options).map(result => result.json());

  }

}
