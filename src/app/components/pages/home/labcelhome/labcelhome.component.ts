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
import {BRANCHS} from '@app/services/branchs.service';
import {CARDS} from '@app/services/cards.service';
@Component({
  selector: 'app-labcelhome',
  templateUrl: './labcelhome.component.html',
  styleUrls: ['./labcelhome.component.css']
})
export class LabcelhomeComponent implements AfterViewInit {
   public  banchss:any=["br000003","br000002","-","br000001"];
    transactions$: any;
  public  totales:any=[0,0,0,0];
  public branchs:any=[];
  public cards:any=[];
  public totalCalculado=0;
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
  this.branchs=BRANCHS;
  this.cards=CARDS
  }
public totalIndividual(idBranch:any){
  this.totalCalculado=0;
  let pidBranch=idBranch;
  if(this.transactions$!==undefined){

    let size = this.transactions$.length;
    for (let i =0;i<size;i++){
      if(this.transactions$[i].amount>0 && this.transactions$[i].idBranch == pidBranch){
        this.totalCalculado=this.totalCalculado+this.transactions$[i].amount;
      }
    }
  }
}
public calculoTotales(){
 
  for (let i =0;i<4;i++){
    this.totalIndividual(this.banchss[i]);
    this.totales[i]=this.totalCalculado;
  }
}

  public loadFromRest(){
      this.transactions$=this.dataApiService.getTransationByBranch(this._butler.userActive.idBranch);

  } public loadFromGQL(){
     this.dataApi.getTransactionsByBranch(0,0,this._butler.userActive.idBranch);
   this.transactions$=this.dataApi.transactions$;  
  }

  ngAfterViewInit(): void {
this.calculoTotales();
      if(!this._butler.isLogged){    
      this.router.navigate(['/login'])
    }
if (this._butler.admin){}else{

   this.loadFromRest();

}


  }

}
