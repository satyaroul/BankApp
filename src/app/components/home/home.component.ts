import { Component, OnInit, DoCheck } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';
import { Router } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {
  customerData: any;
  isBeneficiary = false;
  editTitle = "Customer";
  logintoken:string;
  beneficiary = {
    name: "",
    accountNo: "",
    ifsc: "",
    phone: ""
  }
  constructor(private bankService: BankServicesService, private router: Router, private APIs: APIcallsService, private loginService: LoginService) { }

  ngDoCheck() {
    this.customerData = this.bankService.customerDataByID;
    this.logintoken = this.loginService.loginToken;
  }

  showBeneficiary() {
    this.isBeneficiary = true;
  }

  hideBeneficiary() {
    this.isBeneficiary = false;
  }

  addBeneficiary() {
    this.bankService.saveBeneficiary(this.beneficiary);
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/customer-overview']);
    });
  }

  delete(id) {
    var customerID = this.loginService.loginToken;
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.APIs.DELETEBeneficiary(customerID, id).subscribe(response => {
        console.log(response);
        this.bankService.customerDetailsByID(customerID);
      });
      this.router.navigate(['/customer-overview']);
    });
    this.isBeneficiary = true;
  }

}
