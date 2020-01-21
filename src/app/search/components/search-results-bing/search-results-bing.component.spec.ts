import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsBingComponent } from './search-results-bing.component';

describe('SearchResultsBingComponent', () => {
  let component: SearchResultsBingComponent;
  let fixture: ComponentFixture<SearchResultsBingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsBingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsBingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
