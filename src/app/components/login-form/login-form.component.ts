import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  public login_form : any

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.login_form = this.formBuilder.group({
      correo:['',[Validators.required, Validators.email]],
      contra:['',[Validators.required,Validators.minLength(6)]],
      terms:['',[Validators.requiredTrue]],
      youtube:['',[Validators.required,Validators.pattern("^(https?\\:\\/\\/)?(www.\\.youtube\\.com|youtu\\.?be)\\/.+$")]],
      type:[''],
      color:['']
    });
  }
  changeType = ()=>{
    console.log(this.login_form.value.type);
    if(this.login_form.value.type!=0){
      this.login_form.get('color').setValidators(Validators.required)
      this.login_form.get('color').updateValueAndValidity();
    }else{
      this.login_form.get('color').clearValidators(Validators.required)
      this.login_form.get('color').updateValueAndValidity();
    }
  }
  loadApi(){
    const response = {
      correo:"alvaro@gmail.com",
      contra:'123456',
      terms:true,
      youtube:'https://youtu.be/KwN7m-XA8lY'
    }
    this.login_form.patchValue(response)
  }
  login(){
    console.log(this.login_form.value)
    alert("Saca 2")
  }
}
