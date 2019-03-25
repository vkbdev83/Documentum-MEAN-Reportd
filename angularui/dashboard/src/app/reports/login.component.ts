import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  ticket:String;

  constructor() { }

  ngOnInit() {
  }


  performLogin(){

    console.log("ISnider Perform Login Function" + this.userName + this.ticket);
  }
}
