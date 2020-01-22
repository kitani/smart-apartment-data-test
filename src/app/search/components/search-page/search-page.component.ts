import { Component, OnInit } from '@angular/core';
import { SearchRequest } from '../../models';
import { ActionsService } from '../../../state-management/actions.service';
import { makeSearchRequest } from '../../state-management/search.actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public actions: ActionsService) {
  }

  onSearch(request: SearchRequest): void {
    this.actions.dispatch(makeSearchRequest(request.query, request.provider));
  }

  ngOnInit() {
  }

}
