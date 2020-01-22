import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { PrivateZoneComponent } from './components/private-zone/private-zone.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignInComponent, PrivateZoneComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class AuthModule { }
