import { Component, OnInit } from '@angular/core';
import { SearchRequest } from '../../models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() {
  }

  onSearch(request: SearchRequest): void {
    console.log('Make search request with', request);
  }

  ngOnInit() {
  }

}
