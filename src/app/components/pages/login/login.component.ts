import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';
import { FormControl, FormGroup } from "@angular/forms";
import { RegisterFormSchema } from "./form-schema";
//import { createYupValidator } from "../../../validator";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public _butler:Butler
  ) { }


  ngOnInit(): void {
  this._butler.biker=false;
  }

}
