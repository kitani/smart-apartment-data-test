import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsGoogleComponent } from './search-results-google.component';

describe('SearchResultsGoogleComponent', () => {
  let component: SearchResultsGoogleComponent;
  let fixture: ComponentFixture<SearchResultsGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
