import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsViewBingComponent } from './search-results-view-bing.component';

describe('SearchResultsViewBingComponent', () => {
  let component: SearchResultsViewBingComponent;
  let fixture: ComponentFixture<SearchResultsViewBingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsViewBingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsViewBingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
