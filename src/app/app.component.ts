import { Component, DoCheck } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'BankApp';
  logged : boolean;
  constructor(private loginService :LoginService) { 
  }

  ngDoCheck(){
    this.logged = this.loginService.isLogged;
    console.log(this.logged);
  }
}
