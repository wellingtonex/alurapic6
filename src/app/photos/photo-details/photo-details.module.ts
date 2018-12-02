import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PhotoModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ]
})
export class PhotoDetailsModule { }
