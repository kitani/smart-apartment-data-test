import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { EffectsService } from './state-management/effects.service';
import { SearchEffects } from './search/state-management/search.effects';

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
  constructor(private effectsService: EffectsService, private searchEffects: SearchEffects) {
    effectsService.start([...searchEffects.getSearchEffects()]);
  }
}
