/**
 * Created by babuvi on 21/05/2018.
 */
import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
