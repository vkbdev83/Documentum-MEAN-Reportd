import { Component,  } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';


  constructor(private router: Router){


  }
  navigate(screenName : string){

    console.log("Screen name "+ screenName);

    this.router.navigate(['/'+screenName]);

  }

}
