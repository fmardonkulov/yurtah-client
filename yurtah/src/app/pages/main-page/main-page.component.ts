import { Component, OnInit } from '@angular/core';
import { Element } from '../../applets/dom-events';
import {Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { apiRoute } from '../../api/api.links';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  data: any;
  constructor(
    private router: Router,
    private socialAuthService: AuthService,
    private http: HttpClient,
    private cookieService: CookieService,
  ) {
    this.data = {email: '', password: ''};
    this.user = {
      password1: '',
      password2: '',
      email: '',
      username: '',
    };
  }

  user: any;

  ngOnInit() {

    // some js styles
    // height of height element must be 100%

    (() => {
      const setHeight = () => {
        const height = window.innerHeight;
        document.getElementsByClassName('height')[0]['style'].height = `${height}px`;
      };

      const setScroll = () => {

        if(window.pageYOffset >= 10){
          document.getElementsByClassName('main-page_menu')[0].classList.add('white');
        }else{
          document.getElementsByClassName('main-page_menu')[0].classList.remove('white');
        }

        if(window.pageYOffset >= 285){
          document.getElementsByClassName('formFixed')[0].classList.add('fixed');
        }else{
          document.getElementsByClassName('formFixed')[0].classList.remove('fixed');
        }
      };

      const doc = new Element('window');

      doc.resize(setHeight);
      doc.scroll(setScroll);
      setHeight();
    })();

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

  public submitForm() {
    console.log(this.data);

    this.http.post(apiRoute('login'), this.data)
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

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData


      }
    );
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
