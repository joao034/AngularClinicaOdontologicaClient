import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginI } from '../../../models/login.interface';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'odonto-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lockIcon = true;
  group: FormGroup;

  constructor(private loginService : LoginService ) {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      recaptchaReactive: new FormControl(null, Validators.required)
    });

   }

  ngOnInit(): void {
  }

  login(group: LoginI){  
    this.loginService.login(group).subscribe(data =>{
      console.log(data)
    })
  }


}
