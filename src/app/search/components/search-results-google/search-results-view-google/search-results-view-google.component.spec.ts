import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsViewGoogleComponent } from './search-results-view-google.component';

describe('SearchResultsViewGoogleComponent', () => {
  let component: SearchResultsViewGoogleComponent;
  let fixture: ComponentFixture<SearchResultsViewGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsViewGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsViewGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
