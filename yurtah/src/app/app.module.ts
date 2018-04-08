import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    children: [
      { path: 'edit',
        children: [
          { path: 'info',
            component: EditInfoComponent },
          { path: 'personal',
            component: EditPersonalInfoComponent } ],
      },
      {
        path: 'listings',
        component: ListingListComponent,
      },
      {
        path: 'listings/new',
        component: AddListingComponent,
      }
    ]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EditInfoComponent,
    EditPersonalInfoComponent,
    ListingListComponent,
    AddListingComponent,
    ProfileMainMenuComponent,
    ProfileContentWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
