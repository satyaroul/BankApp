import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements DoCheck {
logged : boolean;
  constructor(private loginService :LoginService) { 
    this.logged = this.loginService.isLogged;
  }

  ngDoCheck(){
    this.logged = this.loginService.isLogged;
  }


}
