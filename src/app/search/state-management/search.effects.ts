import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Action, Effect } from '../../state-management/models';
import { SEARCH_ACTION_TYPES, searchRequestSuccess } from './search.actions';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchEffects {
  constructor(private search: SearchService) {
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
    );
  };
}
