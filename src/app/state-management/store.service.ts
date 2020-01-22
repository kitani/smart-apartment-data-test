import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { ActionsService } from './actions.service';
import { KeyedReducerFn, ReducerFn } from './models';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public state$: Observable<any>;
  private stateSubject: BehaviorSubject<any>;
  private keyedReducerFns: KeyedReducerFn<any>[] = [];

  constructor(private actions: ActionsService) {
  }

  public start<T>(initialState: T, keyedReducerFns: KeyedReducerFn<any>[]): void {
    this.stateSubject = new BehaviorSubject<T>(initialState);
    this.state$ = this.stateSubject.asObservable();
    this.keyedReducerFns = keyedReducerFns;

    this.actions.actions$
      .subscribe((action) => {
        const state = this.stateSubject.getValue();
        console.log('Store:', action, state);
        const newState = this.keyedReducerFns.reduce((acc, keyedReducer: KeyedReducerFn<any>) => {
          if (!keyedReducer.key) {
            return keyedReducer.reducer(action, acc);
          }

          // Feature reducer fn
          return {
            ...acc,
            [keyedReducer.key]: keyedReducer.reducer(action, acc[keyedReducer.key])
          };
        }, state);

        this.stateSubject.next(newState);
        // tslint:disable-next-line:no-console
        console.info('New state', newState);
      });
  }
}
