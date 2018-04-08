import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class MainGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    console.log('hello');
    if (window.sessionStorage.getItem('token') != null) {
      return true;
    } else {
      this.router.navigate(['/accounts/sign-in']);
      return false;
    }
  }
}
