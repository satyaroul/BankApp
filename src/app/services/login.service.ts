import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIcallsService } from './apicalls.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loginToken : Number;
  constructor(private http: HttpClient, private APIs: APIcallsService) { }

  login(id , password) {
    this.APIs.GETLogin().subscribe(data => {
      console.log(data);
      for (var key in data) {
        // console.log(data[key].token);
        if (data[key].email == id && data[key].password == password) {
          this.loginToken = data[key].token; 
        }
      }
      console.log(this.loginToken);
      this.isLogged = true;
    });
  }
}
