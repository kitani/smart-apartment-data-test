import { Observable } from 'rxjs';

export interface Action {
  type: string;
  payload?: any;
}

export interface Effect {
  (action: Action): Observable<Action[]>;
}
