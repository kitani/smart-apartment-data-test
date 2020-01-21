import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search/components/search-page/search-page.component';
import { SearchResultsBingComponent } from './search/components/search-results-bing/search-results-bing.component';
import { SearchResultsGoogleComponent } from './search/components/search-results-google/search-results-google.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent,
    children: [
      {
        path: 'bing',
        component: SearchResultsBingComponent,
      },
      {
        path: 'google',
        component: SearchResultsGoogleComponent,
      }
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
