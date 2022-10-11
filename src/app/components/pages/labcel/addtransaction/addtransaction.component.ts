import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import {Butler} from '@app/services/butler.service';
import { BikersService } from '@app/services/';
import {Map, Popup,Marker} from 'mapbox-gl';
import { MapService } from '@app/services/map.service';
import { Feature } from '@app/interfaces/places';
import { BuckapicardInterface } from '@app/interfaces/buckapicard';
import { Apollo } from "apollo-angular";
import { DataService } from '@app/services/data.service'; 
import { DataApiService } from '@app/services/data-api.service'; 
import gql from "graphql-tag";
import {TECHNICALS} from '@app/services/technicals.service';
@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements AfterViewInit {
  public technicals:any=[];
  option=0;
  optionSelectedText="";
  optionSelected=false;   
   repair=0;
  repairSelectedText="";
  repairSelected=false;  
  technical=0;
  technicalSelectedText="";
  technicalSelected=false;
  type=0;
  typeSelectedText="";
  typeSelected=false;

  constructor(
private bikersService:BikersService,
    public script:ScriptService,
    private mapService:MapService,
    public router:Router,
    private apollo: Apollo,
    public dataApi: DataService,
    public dataApiService: DataApiService,
    public _butler: Butler
    ) {
  this.technicals=TECHNICALS
     }
public setOption(option:any){
  this.option=option;
  if(option==1){this.optionSelectedText="PAYJOY";this.optionSelected=true;}
  if(option==2){this.optionSelectedText="FOXPAY ";this.optionSelected=true;}
  if(option==3){this.optionSelectedText="CC FACIL";this.optionSelected=true;}
  if(option==4){this.optionSelectedText="ACCESORIOS";this.optionSelected=true;}
  if(option==5){this.optionSelectedText="REPARACION";this.optionSelected=true;}
 
}
public setTechnical(technical:any){
  this.technical=technical;
  for (let i =0;i<this.technicals.length;i++){
 if(technical==i+1){this.technicalSelectedText= this.technicals[i].name;this.technicalSelected=true;}

  }
 
}
public setType(type:any){
  this.type=type;
 if(type==1){this.typeSelectedText="Enganche";this.typeSelected=true;}
  if(type==2){this.typeSelectedText="Parcialidad ";this.typeSelected=true;}

 
}
public setRepair(repair:any){
  this.repair=repair;
 if(repair==1){this.repairSelectedText="Hardware";this.repairSelected=true;}
  if(repair==2){this.repairSelectedText="Software";this.repairSelected=true;}

 
}
public resetRepair(){
  this.repair=0;
 this.repairSelected=false;
}
public resetOption(){
  this.option=0;
 this.optionSelected=false;
}
public resetType(){
  this.type=0;
 this.typeSelected=false;
}
public resetTechnical(){
  this.technical=0;
 this.technicalSelected=false;
}
  ngAfterViewInit(): void {
  }

}
