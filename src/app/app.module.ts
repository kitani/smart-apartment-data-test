import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { EffectsService } from './state-management/effects.service';
import { SearchEffects } from './search/state-management/search.effects';
import { StoreService } from './state-management/store.service';
import { initialState } from './state-management/models';
import { searchReducers } from './search/state-management/search.reducers';
import { addReducerKey } from './state-management/helpers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private effectsService: EffectsService,
    private searchEffects: SearchEffects,
    private store: StoreService,
  ) {
    effectsService.start([...searchEffects.getSearchEffects()]);
    store.start(initialState, [...addReducerKey(searchReducers, 'search')]);
  }
}
