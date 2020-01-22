import { Injectable } from '@angular/core';
import { Action, Effect } from '../../state-management/models';
import { of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthModule } from '../auth.module';
import { AUTH_ACTION_TYPES, signInSuccess } from './auth.actions';

@Injectable({
  providedIn: AuthModule,
})
export class AuthEffects {
  constructor(private router: Router) {
  }

  public getAuthEffects = (): Effect[] => [
    this.makeSignInEffect
  ];

  private makeSignInEffect: Effect = (action: Action) => {
    if (action.type !== AUTH_ACTION_TYPES.SIGN_IN_START) {
      return of([] as Action[]);
    }

    return of({name: 'John Johnson'}).pipe(
      delay(2000),
      map(data => [signInSuccess(data)]),
      tap(result => this.router.navigate([`/auth/private`])),
    );
  }
}
