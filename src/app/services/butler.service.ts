import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Butler {
    car:any[]=[];
    currency:number=1;
    init:number=1;
    end:number=12;
    numProd:number=0;
    results:number=0;
    preview:any={};
    totalProducts:number=0;
    imagePreviewProduct:string="";
      subTotal:number=0;
    review:boolean=false;
    vector:any={};       
    string:string=""; 
    distance:string="";
    distance2:number=0;
    duration:number=0;
    biker:boolean=false;
    details:boolean=false;
    editing:boolean=false;
    profile:boolean=true;
    isLogged:boolean=true;
    bikerStatus:boolean=false;
    skip:number=0;
    limit:number=12;
    type:string="Passenger"; 
    placeholder:string="a donde deseas ir?"; 
	  any:any[]=[]; 
    number:number=0;

    rides:boolean=false;
    name:string=""; 
    idApp:string=""; 
    userd:string=""; 
    userId:string=""; 
    userType:string=""; 
    email:string=""; 
            

    constructor() { }
}