import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsBingComponent } from './components/search-results-bing/search-results-bing.component';
import { SearchResultsGoogleComponent } from './components/search-results-google/search-results-google.component';
import { SearchResultsViewBingComponent } from './components/search-results-bing/search-results-view-bing/search-results-view-bing.component';
import { SearchResultsViewGoogleComponent } from './components/search-results-google/search-results-view-google/search-results-view-google.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule } from '@angular/material';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchFormComponent,
    SearchResultsBingComponent,
    SearchResultsGoogleComponent,
    SearchResultsViewBingComponent,
    SearchResultsViewGoogleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
  ]
})
export class SearchModule {
}
