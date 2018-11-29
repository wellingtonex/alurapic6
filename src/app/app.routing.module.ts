import { SignupComponent } from './home/signup/signup.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth/auth-guard';
import { SigninComponent } from './home/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [ AuthGuard ],
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
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
        //para utilizar # nas rotas, permitindo maior compatibilidade de browsers que nao
        //tem suporte a history api
        //RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

