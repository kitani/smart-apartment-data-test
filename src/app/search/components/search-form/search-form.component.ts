import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SearchRequest } from '../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<SearchRequest>();

  formChangesSub: Subscription;

  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required]),
    provider: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  ngOnInit() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => !!this.searchForm.valid),
      )
      .subscribe(newValue => {
        // console.log('Form value changed', newValue, this.searchForm.valid);
        this.search.emit(newValue);
      });
  }

  ngOnDestroy(): void {
    this.formChangesSub && this.formChangesSub.unsubscribe();
  }
}
