import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results-bing/search-results.component';
import { SearchResultsViewComponent } from './components/search-results-bing/search-results-view-bing/search-results-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchFormComponent,
    SearchResultsComponent,
    SearchResultsViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    RouterModule,
  ]
})
export class SearchModule {
}
