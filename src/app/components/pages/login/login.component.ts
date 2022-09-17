import { Component, Input,OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ACTIONS } from '@shared/constants/constant';
import { ApiError, User, UserCredentials } from '@supabase/gotrue-js';
import { ToastrService } from 'ngx-toastr';
export interface OptionsForm {
  id: string;
  label: string;
}
interface UserReponse extends User, ApiError { }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   authForm !: FormGroup;
  signIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;
  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly toastSvc: ToastrService,
  ) { }

 
  


  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void> {
    const credentials: UserCredentials = this.authForm.value;
    let actionToCall = this.authSvc.signIn(credentials);

   
      actionToCall = this.authSvc.signIn(credentials);
   

    try {
      const result = await actionToCall as UserReponse;
      if (result.email) {
        this.toastSvc.success("Welcome dear" +result.email, 'Logged!');
        this.redirectUser();
      } else {
        this.toastSvc.info(result.message, 'Info');
      }
    } catch (error) {
      console.log(error);
    }


  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private redirectUser(): void {
    this.router.navigate(['/home']);
  }

}
