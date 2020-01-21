import { Injectable } from '@angular/core';
import { ActionsService } from './actions.service';
import { Effect } from './models';

const actionLogger: Effect = (action) => {
  console.warn('ACTION: ', action.type, action.payload);
  return [];
};

@Injectable({
  providedIn: 'root'
})
export class EffectsService {
  private effects: Effect[] = [];

  constructor(private actions: ActionsService) {
  }

  public start(effects: Effect[] = []): void {
    this.effects = [actionLogger, ...effects];

    this.actions.actionsStream.subscribe(action => {
      const newActions = this.effects
        .map(effect => effect(action))
        .flat()
        .filter(newAction => !!newAction)
        .forEach(newAction => {
          this.actions.dispatch(newAction);
        });
    });
  }
}
