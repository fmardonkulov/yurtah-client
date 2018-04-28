import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class MainGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate() {
    console.log('hello');
    console.log(this.cookieService.get('token'))
    if (this.cookieService.get('token')) {
      return true;
    } else {
      this.router.navigate(['/accounts/sign-in']);
      return false;
    }
  }
}
