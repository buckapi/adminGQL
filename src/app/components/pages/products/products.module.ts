import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
        FormsModule,
    ProductsRoutingModule,
     NgxDaterangepickerMd.forRoot({
            separator: ' - ',
            // locale:'es',
            
            applyLabel: 'Okay',
        })
  ]
})
export class ProductsModule { }
