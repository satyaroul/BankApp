import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIcallsService } from './apicalls.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loginToken: string;
  invalid = false;
  constructor(private http: HttpClient, private APIs: APIcallsService, private route: Router) { }

  login(id, password) {
    this.APIs.GETLogin().subscribe(data => {
      for (var key in data) {
        // console.log(data[key].token);
        if (data[key].email == id && data[key].password == password) {
          this.loginToken = data[key].token;
          window.sessionStorage.setItem("loginToken",this.loginToken);
          this.route.navigate(['/overview']);
          this.invalid = false;
          this.isLogged = true;
          break;
        }else{
          this.invalid = true;
          this.route.navigate(['/']);
        }
      }    
    });
  }
  logout(){
    window.sessionStorage.removeItem("loginToken");
  }
}
