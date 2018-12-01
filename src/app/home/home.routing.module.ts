import { LoginGuard } from './../core/auth/login-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [

    {
      path: '',
      component: HomeComponent,
      canActivate: [ LoginGuard ],
      children: [
        {
          path: '',
          component: SigninComponent,
        },
        {
          path: 'signup',
          component: SignupComponent
        }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

