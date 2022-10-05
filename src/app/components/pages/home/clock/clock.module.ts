import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from '@pages/home/clock/clock.component';


@NgModule({
  declarations: [ClockComponent],
      imports: [
        CommonModule
  ],
  exports: [
    CommonModule,
    ClockComponent
  ]
  
})
export class ClockModule { }
