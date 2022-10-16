import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { Router } from '@angular/router';
import { CountryService } from './services/country.service';
import { ScriptService } from './services/script.service';
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;



  title = 'motogo';
    public tixToAdd=[];

  constructor(
    private countryService: CountryService,
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
        public router:Router,
  ){}

  get single() {
    return this.countryService.countryData;
  }

  onRandomData() {
    this.countryService.randomData();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

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
