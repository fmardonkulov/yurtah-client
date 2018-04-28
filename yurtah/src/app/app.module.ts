import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EditInfoComponent } from './pages/edit-info/edit-info.component';
import { EditPersonalInfoComponent } from './pages/edit-personal-info/edit-personal-info.component';
import { ListingListComponent } from './pages/listing-list/listing-list.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { ProfileMainMenuComponent } from './components/profile-main-menu/profile-main-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProfileContentWrapperComponent } from './components/profile-content-wrapper/profile-content-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import {MainGuard} from './main.guard';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { appRoutes } from './routes';
import { CookieService } from 'ngx-cookie-service';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  return new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("222397305161419")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("b5bn9Iizrz5Azzfs8EKH-4gF")
      },
    ]
  );
}


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EditInfoComponent,
    EditPersonalInfoComponent,
    ListingListComponent,
    AddListingComponent,
    ProfileMainMenuComponent,
    ProfileContentWrapperComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    Angular2FontawesomeModule,
    SocialLoginModule,
  ],
  providers: [
    MainGuard, 
    HttpClientModule,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
