import { Component, OnInit } from '@angular/core';
import { SearchRequest } from '../../models';
import { ActionsService } from '../../../state-management/actions.service';
import { makeSearchRequest } from '../../models/actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public store: ActionsService) {
  }

  onSearch(request: SearchRequest): void {
    // console.log('Make search request with', request);
    this.store.dispatch(makeSearchRequest(request.query, request.provider));
  }

  ngOnInit() {
    // this.store.actionsStream.subscribe(action => console.log('ACTION: ', action.type, action.payload));
  }

}
