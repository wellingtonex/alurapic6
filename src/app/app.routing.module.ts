import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { ErrosModule } from './erros/erros.module';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {path: 'user/:userName', component: PhotoListComponent, resolve: {
    photos: PhotoListResolver
  }},
  {path: 'photo/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ErrosModule
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
