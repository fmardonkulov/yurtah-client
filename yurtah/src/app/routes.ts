import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListingsPageComponent } from './pages/listings-page/listings-page.component';
import { EditInfoComponent } from './pages/edit-info/edit-info.component';
import { EditPersonalInfoComponent } from './pages/edit-personal-info/edit-personal-info.component';
import { ListingListComponent } from './pages/listing-list/listing-list.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { ProfileMainMenuComponent } from './components/profile-main-menu/profile-main-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProfileContentWrapperComponent } from './components/profile-content-wrapper/profile-content-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainGuard } from './main.guard';

export const appRoutes: Routes = [
    {
      path: '',
      component: MainPageComponent,
      pathMatch: 'full',
    },
    {
      path: 'listings',
      component: ListingsPageComponent,
      pathMatch: 'full',
    },
    {
      path: 'accounts',
      children: [
        { path: 'edit',
          canActivate: [MainGuard],
          children: [
            { path: 'info',
              component: EditInfoComponent },
            { path: 'personal',
              component: EditPersonalInfoComponent } ],
        },
        {
          path: 'listings',
          canActivate: [MainGuard],
          component: ListingListComponent,
        },
        {
          path: 'listings/new',
          canActivate: [MainGuard],
          component: AddListingComponent,
        },
        {
          path: 'sign-in',
          component: SignInComponent,
        },
        {
          path: 'sign-up',
          component: SignUpComponent,
        }
      ]
    }
  ];
