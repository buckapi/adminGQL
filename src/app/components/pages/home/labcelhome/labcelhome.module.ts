import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabcelhomeRoutingModule } from './labcelhome-routing.module';
import { LabcelhomeComponent } from './labcelhome.component';


@NgModule({
  declarations: [
    LabcelhomeComponent
  ],
  imports: [
    CommonModule,
    LabcelhomeRoutingModule
  ],
    exports: [LabcelhomeComponent],
})
export class LabcelhomeModule { }
