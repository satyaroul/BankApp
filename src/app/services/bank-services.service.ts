import { Injectable } from '@angular/core';
import { APIcallsService } from './apicalls.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BankServicesService {
  allTransactionDetails: any;
  loginAccess = {
    customerToken: "",
    loginID: "",
    password: ""
  }
  allCustomers: any;
  customerDataByID: any;
  branchDetails : any;
  constructor(private APIs: APIcallsService, private route: Router) { }

  submittedTransactions() {
    this.APIs.GETSubmittedTransactions().subscribe(response => {
      console.log(response);
      this.allTransactionDetails = response;
      console.log(this.allTransactionDetails)
    });
  }

  saveNewCustomer(data) {
    this.APIs.POSTNewCustomer(data).subscribe(response => {
      this.loginAccess.customerToken = response['name'];
      this.loginAccess.loginID = data.email;
      this.loginAccess.password = data.password;
      this.saveNewLogin();
      this.allCustomersForAdmin();
    })
  }

  saveNewLogin() {
    this.APIs.POSTNewCustomerLogin(this.loginAccess).subscribe(response => {
      console.log(response);
    })
  }

  allCustomersForAdmin() {
    this.APIs.GETAllCustomersForAdmin().subscribe(response => {
      console.log(response);
      this.allCustomers = response;
    })
  }

  customerDetailsByID(id){
    this.APIs.GETCustomerDetailsByID(id).subscribe( response =>{    
      this.customerDataByID = response;
      console.log(response);
    })
  }

  createNewBranch(details){
    this.APIs.POSTNewBranch(details).subscribe(response =>{
      console.log(response);
    })
  }

  fetchBranchDetails(){
    this.APIs.GETBranchDetails().subscribe(response =>{
      console.log(response);
      this.branchDetails = response;
    })
  }

  saveBeneficiary(data){
    var id = window.sessionStorage.getItem("loginToken");
    console.log(id);
    this.APIs.POSTBeneficiary(id,data).subscribe(response =>{
      console.log(response);
      this.customerDetailsByID(id);
    })
  }

}
