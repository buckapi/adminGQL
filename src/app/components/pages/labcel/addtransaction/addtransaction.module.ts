import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtransactionRoutingModule } from './addtransaction-routing.module';
import { AddtransactionComponent } from './addtransaction.component';


@NgModule({
  declarations: [
    AddtransactionComponent
  ],
  imports: [
    CommonModule,
    AddtransactionRoutingModule
  ]
})
export class AddtransactionModule { }
