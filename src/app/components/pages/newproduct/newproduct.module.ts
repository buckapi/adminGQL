import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewproductRoutingModule } from './newproduct-routing.module';
import { NewproductComponent } from './newproduct.component';
import {FilePickerModule} from 'ngx-awesome-uploader';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
@NgModule({
  declarations: [
    NewproductComponent
  ],
  imports: [
   NgxUpperCaseDirectiveModule,
  FilePickerModule,
    CommonModule,
        FormsModule,
         ReactiveFormsModule,
    NewproductRoutingModule
  ]
})
export class NewproductModule { }
