import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LogData } from './logdata.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements DoCheck {
  id: string;
  password: string
  loginToken: string;
  invalid : Boolean;
  disable = true;
  constructor(private loginSevice: LoginService, private route : Router) { }

  Login() {
    console.log(this.id + this.password);
    this.loginSevice.login(this.id, this.password);

  }

  ngDoCheck(){
    if (this.id == null || this.password == null) {
      this.disable = true
    }else{
      this.disable=false;
    }
    this.invalid = this.loginSevice.invalid;
  }

}
