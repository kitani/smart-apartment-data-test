import { Injectable } from '@angular/core';
import { SearchModule } from '../search.module';
import { SearchRequest } from '../models';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: SearchModule,
})
export class SearchService {

  constructor() { }

  getSearchResults(request: SearchRequest): Observable<any> {
    return of(['1', '2']).pipe(
      delay(500),
    );
  }
}
