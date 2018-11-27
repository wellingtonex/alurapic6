import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SigninComponent,
    SingupComponent
  ]
})
export class HomeModule { }
