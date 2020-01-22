import { Injectable } from '@angular/core';
import { ActionsService } from './actions.service';
import { Effect } from './models';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const actionLogger: Effect = (action) => {
  console.warn('ACTION: ', action.type, action.payload);
  return of([]);
};

@Injectable({
  providedIn: 'root'
})
export class EffectsService {
  private effects: Effect[] = [];
  private effectSubscriptions: Subscription[] = [];

  constructor(private actions: ActionsService) {
  }

  public start(effects: Effect[] = []): void {
    this.effects = [actionLogger, ...effects];
    this.effects.forEach(effect => this.addEffect(effect));
  }

  private addEffect(effect: Effect): void {
    this.effectSubscriptions.push(this.actions.actions$
      .pipe(
        switchMap(action => effect(action))
      )
      .subscribe(newActions => {
        newActions
          .filter(newAction => !!newAction)
          .forEach(newAction => {
            this.actions.dispatch(newAction);
          });
      }));
  }
}
