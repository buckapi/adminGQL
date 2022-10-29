import { Component,OnInit } from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { Router } from '@angular/router';
import { ScriptService } from './services/script.service';
import { DeviceDetectorService } from 'ngx-device-detector'
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'motogo';
  public tixToAdd=[];
  deviceInfo:any=null;
  constructor(
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
    public router:Router,
    private deviceService: DeviceDetectorService
  ){
    this.epicFunction();
  }
     public addToBag(){
     this._butler.numProd=this._butler.numProd+1;
     this._butler.preview.id=this._butler.numProd;
     this.tixToAdd=this._butler.preview;
     this._butler.subTotal=this._butler.subTotal+(this._butler.preview.quantity*this._butler.preview.price);
     this._butler.car.push(this.tixToAdd);
  }
   epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
     if(isMobile){this._butler.deviceType="Celular"};
     if(isTablet){this._butler.deviceType="Tablet"};
     if(isDesktopDevice){this._butler.deviceType="Escritorio"};
     // console.log(this.deviceInfo.deviceType);
    }
  ngOnInit(): void {
    // this.bikersScript.getUserLocation();
  }
}
