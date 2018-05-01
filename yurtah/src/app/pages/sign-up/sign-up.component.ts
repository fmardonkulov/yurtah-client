import { Component, OnInit } from '@angular/core';
import { apiRoute } from '../../api/api.links';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {
    this.user = {
      password1: '',
      password2: '',
      email: '',
      username: '',
    };
  }

  user: any;

  ngOnInit() {
  }

  sendData() {
    this.http.post(apiRoute('register'), this.user)
      .pipe(
        tap((data) => {
          this.setToken(data['token']);
          this.router.navigate(['/accounts/edit/personal']);
        }),
        catchError(this.handleError())
      )
      .subscribe();
  }

  private setToken(token) {
    console.log(token);
    this.cookieService.set('token', token);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      alert('Введены некорректные данные');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
