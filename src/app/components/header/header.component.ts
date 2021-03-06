import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAdmin : boolean;
  constructor(private loginService: LoginService, private route : Router) { }

  ngOnInit() {
    this.isAdmin= this.loginService.isAdmin;
    console.log(this.isAdmin);
  }
  Logout(){
    this.loginService.isLogged = false;
    this.route.navigate(['/']);
    this.loginService.logout();
  }

}
