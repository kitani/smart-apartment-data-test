import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionsService } from '../../../state-management/actions.service';
import { StoreService } from '../../../state-management/store.service';
import { Router } from '@angular/router';
import { signInStart } from '../../state-management/auth.actions';
import { Subscription } from 'rxjs';
import { authStateSelector } from '../../../state-management/selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit, OnDestroy {
  loading: boolean;
  authStateSub: Subscription;

  signInForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private actions: ActionsService, private store: StoreService, private router: Router) {
  }

  isFormDisabled(): boolean {
    return this.signInForm.invalid || this.loading;
  }

  onSubmit(credentials) {
    if (this.signInForm.invalid) {
      return;
    }
    console.log('Form submit', credentials);

    this.actions.dispatch(signInStart(credentials));
  }

  ngOnInit() {
    this.authStateSub = this.store.state$
      .pipe(
        map(state => authStateSelector(state)),
      )
      .subscribe(authState => {
        this.loading = authState.loading;
      });
  }

  ngOnDestroy(): void {
    this.authStateSub && this.authStateSub.unsubscribe();
  }

}
