import { Injectable } from '@angular/core';
import { Action } from './models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private actionsSubject = new Subject<Action>();

  public actions$ = this.actionsSubject.asObservable();

  constructor() {
  }

  public dispatch(action: Action) {
    this.actionsSubject.next(action);
  }
}
