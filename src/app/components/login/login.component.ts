import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LogData } from './logdata.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginModel = false;
  isAdmin = false;
  ngOnInit() { }

  selecetedLoginType(value) {
    console.log(value);
    this.showLoginModel = true;
    this.isAdmin = value;
    console.log(this.isAdmin);
  }

}
