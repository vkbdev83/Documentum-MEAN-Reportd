import { Injectable } from '@angular/core';
import {ResponseContentType, RequestOptions, URLSearchParams, Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) { }


  login(username:String, password:String): Observable<any> {


    let myParams = new URLSearchParams();

    myParams.append('reportid','123');

    let options = new RequestOptions({responseType: ResponseContentType.Json,params: myParams});

    return this.http.get("http://localhost:3000/login",options).map(result => result.json());

  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
