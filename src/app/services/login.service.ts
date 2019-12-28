import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIcallsService } from './apicalls.service';
import { Router } from '@angular/router';
import { BankServicesService } from './bank-services.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loginToken: string;
  invalid = false;
  isAdmin = false;
  constructor(private http: HttpClient, private APIs: APIcallsService, private route: Router, private bankService: BankServicesService) { }

  login(id, password) {
    this.APIs.GETLogin().subscribe(data => {
      for (var key in data) {
        // console.log(data[key].token);
        if (data[key].loginID == id && data[key].password == password && data[key].customerToken == "admin") {
          this.loginToken = data[key].customerToken;
          window.sessionStorage.setItem("loginToken", this.loginToken);
          if (!this.isAdmin) {
            this.invalid = true;
          }
          else {
            this.bankService.allCustomersForAdmin();
            this.bankService.fetchBranchDetails();
            this.route.navigate(['/admin-overview']); 
            this.invalid = false;
            this.isLogged = true;
          }

          break;
        }
        else if (data[key].loginID == id && data[key].password == password && data[key].customerToken != "admin") {
          this.loginToken = data[key].customerToken;
          window.sessionStorage.setItem("loginToken", this.loginToken);
          if (this.isAdmin) {
            this.invalid = true;
          }
          else {
            this.bankService.customerDetailsByID(this.loginToken);
            this.route.navigate(['/customer-overview']);
            this.invalid = false;
            this.isLogged = true;
          }

          break;
        } else {
          this.invalid = true;
          this.route.navigate(['/']);
        }
      }

    });
  }
  logout() {
    window.sessionStorage.removeItem("loginToken");
  }
}
