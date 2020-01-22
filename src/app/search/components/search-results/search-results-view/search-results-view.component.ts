import { Component, Input, OnInit } from '@angular/core';
import { SearchRequest } from '../../../models';

@Component({
  selector: 'app-search-results-view',
  templateUrl: './search-results-view.component.html',
})
export class SearchResultsViewComponent implements OnInit {
  @Input() results: { result: any, request: SearchRequest };
  @Input() provider: string;

  constructor() {
  }

  ngOnInit() {
  }

}
