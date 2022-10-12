import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtransactionRoutingModule } from './addtransaction-routing.module';
import { AddtransactionComponent } from './addtransaction.component';
import { ClockModule } from '@pages/home/clock/clock.module';

@NgModule({
  declarations: [
    AddtransactionComponent
  ],
  imports: [
    CommonModule,
    AddtransactionRoutingModule,
    ClockModule  
  ]
})
export class AddtransactionModule { }
