import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup = this.formBuilder.group({
    email:['', [ Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
    password:['', [ Validators.required, Validators.minLength(6)]],
    cnPassword:['', [ Validators.required]],
    checkbox:['', [ Validators.required]]
  }, {validator:this.checkpass('password', 'cnPassword')});

  constructor(public formBuilder:FormBuilder) { 
  }

  private checkpass(pass:string, cnPass:string){
    return(group:FormGroup) =>{
      const pass1 = group.controls[pass];
      const pass2 = group.controls[cnPass];
      if(pass1.value !== pass2.value){
        pass2.setErrors({notSame:true})
      }
    }
  }
 
  public errorMessage:any = {
    errorMsg : 0,
  }

  onSubmit(){
    console.log(this.signInForm.value);
    if(this.signInForm.value.cnPassword !== this.signInForm.value.password){
      this.errorMessage.errorMsg = 1;
    }if(this.signInForm.value.cnPassword == this.signInForm.value.password){
      this.errorMessage.errorMsg = 0;
    }
  }
  ngOnInit() {
  }

}
