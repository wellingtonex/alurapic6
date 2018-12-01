import { PhotoModule } from './../photo/photo.module';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      PhotoFormComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      VMessageModule,
      FormsModule,
      PhotoModule
    ]
})
export class PhotoFormModule {
 }
