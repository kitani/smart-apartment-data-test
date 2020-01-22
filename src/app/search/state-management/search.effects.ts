import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Action, Effect } from '../../state-management/models';
import { SEARCH_ACTION_TYPES, searchRequestSuccess } from './search.actions';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchModule } from '../search.module';

@Injectable({
  providedIn: SearchModule,
})
export class SearchEffects {
  constructor(private search: SearchService, private router: Router) {
  }

  public getSearchEffects = (): Effect[] => [
    this.makeSearchRequestEffect
  ];

  private makeSearchRequestEffect: Effect = (action: Action) => {
    if (action.type !== SEARCH_ACTION_TYPES.SEARCH_REQUEST_ACTION) {
      return of([] as Action[]);
    }

    return this.search.getSearchResults(action.payload).pipe(
      map(searchResult => [searchRequestSuccess(searchResult, action.payload)]),
      tap(result => this.router.navigate([`/search/${action.payload.provider}`])),
    );
  }
}
