import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { DemoFilePickerAdapter } from  '../../../file-picker.adapter';
import { FilePickerComponent, FilePreviewModel } from 'ngx-awesome-uploader';
//import { FilePickerComponent } from '../../../../assets/file-picker/src/lib/file-picker.component';
//import { FilePreviewModel } from '../../../../assets/file-picker/src/lib/file-preview.model';
import { Router } from '@angular/router';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import {Butler} from '@app/services/butler.service';
import { BikersService } from '@app/services/';
import { Apollo } from "apollo-angular";
import { isError } from "util";
import { DataService } from '@app/services/data.service'; 
import { DataApiService } from '@app/services/data-api.service'; 
import { Observable, of } from 'rxjs';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { HttpClient } from  '@angular/common/http';
import gql from "graphql-tag";
import { ToastrService } from 'ngx-toastr';
//import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { ValidationError } from '../../../../assets/file-picker/src/lib/validation-error.model';
import { ValidationError } from 'ngx-awesome-uploader';
import { delay, map } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {




  //adapter = new DemoFilePickerAdapter(this.http,this._butler);

  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
  public adapter = new DemoFilePickerAdapter(this.http);
 public myFiles: FilePreviewModel[] = [];
   public product:any={};
     public options:any=[];
  showB=false;  
  submittedAcce = false;
  category="Seleccione una!";
  mensaje="Salida registrada!";
       nticket=0;
 new: FormGroup = new FormGroup({ 
    concepto: new FormControl(''),
    montoAcce: new FormControl(''),
  
  });
two:false;

  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Arrastre y suelte aquí sus archivos',
      or: 'ó también los puede',
      browse: 'buscar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Remover',
      uploadError: 'Error en la carga',
    },
  };
     public isError = false;
     public images:any[]=[];

  public cropperOptions = {
    minContainerWidth: '300',
    minContainerHeight: '300',
  };

  constructor(
     private  http: HttpClient,
      public script:ScriptService,
      public router:Router,
      private apollo: Apollo,
      public dataApi: DataService,
      public dataApiService: DataApiService,
      public _butler: Butler,
      private formBuilder: FormBuilder,
      private readonly toastSvc: ToastrService
    ) { }
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
    get h(): { [key: string]: AbstractControl } {
    return this.new.controls;
  }
      public saveProduct(){
     this.submittedAcce = true;
      if (this.new.invalid) {
      return;
    }
  this.product.idApp=this._butler.userActive.idApp;
  this.product.idBranch=this._butler.userActive.idBranch;
  this.product.idCard=this._butler.userActive.idCard;
  this.product.email=this._butler.userActive.email;
  this.product.name=this._butler.userActive.name;
  this.product.method="Efectivo";
  this.product.folioTarjeta=null;
  this.product.items=[];
  
  //this.product.serialT=this.currentSerial;
  this.product.amount=this.new.value.montoAcce;
  this.product.description=(this._butler.userActive.categories[this.category])+" ("+this.new.value.concepto+") ";
  this.toastSvc.success(this.mensaje, 'product registrado');
  this.product.status="completed";
  this.product.transactionType="egress";
  // this.product.categoria=this.new.value.categoria;
  this.product.ref=this.nticket;
  this.dataApiService.saveTicket(this.product)
   .subscribe((res:any) => {
    //this.setSerialT();
       this.router.navigate(['/labcelout']);

     });  
     console.log(JSON.stringify(this.options));
}
   public uploadSuccess(event:any): void {
    console.log(event);
  }
 
 // removeFile() {
//  this.uploader.removeFileFromList(this.myFiles[0].fileName);
 // }
   public myCustomValidator(file: File): Observable<boolean> {
    if (!file.name.includes('uploader')) {
      return of(true).pipe(delay(2000));
    }
    // if (file.size > 50) {
    //   return this.http.get('https://vugar.free.beeceptor.com').pipe(map((res) =>  res === 'OK' ));
    // }
    return of(false).pipe(delay(2000));
  }
  
   public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }

  public onUploadSuccess(e: FilePreviewModel): void {
    console.log(e);
      this.images=this._butler.file;
    console.log(this.myFiles);
  }

public  setOption(){
    this.product.categoria=this._butler.userActive.categories[this.category];
    this.showB=true;
    console.log("Category selected "+this._butler.userActive.categories[this.category]);
  }
  public onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  public onFileAdded(file: FilePreviewModel) {
    this.myFiles.push(file);
  }
public aleatorio(a:any,b:any) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }
  ngOnInit(): void {
       this.new = this.formBuilder.group(
      {
        concepto: ['', Validators.required],
        montoAcce: [0, Validators.required]
      }
  
    );
         this.nticket=this.aleatorio(10000,99999);
  }

}
