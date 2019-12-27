import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css']
})
export class LoginModelComponent implements DoCheck {
  @Input() loginType: Boolean;
  id: string;
  password: string;
  loginToken: string;
  invalid: Boolean;
  disable = true;
  constructor(private loginSevice: LoginService, private route: Router) {
  }

  Login() {
    console.log(this.id + this.password);
    this.loginSevice.login(this.id, this.password);

  }

  ngDoCheck() {
    if (this.id == null || this.password == null) {
      this.disable = true
    } else {
      this.disable = false;
    }
    this.invalid = this.loginSevice.invalid;
  }
  // ngOnInit(){
  //   console.log(this.loginType);
  // }
}
