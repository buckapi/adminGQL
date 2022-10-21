import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { Router } from '@angular/router';

import { ScriptService } from './services/script.service';
//declare var $: any;
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


 // Doughnut
  public doughnutChartLabels: string[] = [ 'Hidalgo', 'Colinas del sur', 'Reservas territoriales','Oficina' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //    { data: [ 350, 450, 100 ], label: 'Series A' },
//      { data: [ 50, 150, 120 ], label: 'Series B' },
      { data: [ 250, 130, 70 , 120], label: 'Balance actual' }

    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  title = 'motogo';
    public tixToAdd=[];

  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
        public router:Router,
  ){}



  public addToBag(){
     this._butler.numProd=this._butler.numProd+1;
     this._butler.preview.id=this._butler.numProd;
     this.tixToAdd=this._butler.preview;
     this._butler.subTotal=this._butler.subTotal+(this._butler.preview.quantity*this._butler.preview.price);
     this._butler.car.push(this.tixToAdd);
  }

  ngOnInit(): void {
    
    // this.bikersScript.getUserLocation();
    
  }
}
