import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../../state-management/store.service';
import { lastSearchRequestSelector, lastSearchResultsSelector } from '../../../state-management/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  searchResults: any;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.searchResults = this.store.state$
      .pipe(
        map(state => lastSearchResultsSelector(state)),
      );
  }
}
