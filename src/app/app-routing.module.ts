import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search/components/search-page/search-page.component';
import { SearchResultsComponent } from './search/components/search-results-bing/search-results.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { PrivateZoneComponent } from './auth/components/private-zone/private-zone.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent,
    children: [
      {
        path: ':provider',
        component: SearchResultsComponent,
      },
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'private',
        component: PrivateZoneComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: '**', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
