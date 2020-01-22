import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../../state-management/store.service';
import { lastSearchRequestSelector, lastSearchResultsSelector } from '../../../state-management/selectors';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  searchResults: any;
  currentProvider: Observable<string>;

  constructor(
    private store: StoreService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.searchResults = this.store.state$
      .pipe(
        map(state => lastSearchResultsSelector(state)),
        tap(results => console.log('Search results updated:', results)),
      );

    this.currentProvider = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('provider')),
    );
  }
}
