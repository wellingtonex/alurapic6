import { VMessageComponent } from './vmessage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ VMessageComponent ],
  exports: [ VMessageComponent ]
})
export class VMessageModule { }
