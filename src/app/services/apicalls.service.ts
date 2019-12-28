import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {newTransactionModal} from '../components/new-transaction/new-transaction.modal';

@Injectable({
  providedIn: 'root'
})
export class APIcallsService {
  baseURL = 'https://demoapi-d082a.firebaseio.com/';

  constructor(private http :HttpClient) { }

  GETLogin(){
    // return this.http.get('https://ngdemoapi.getsandbox.com/login');
    // console.log(this.http.get('https://my-first-api-27588.firebaseio.com/'));
    return this.http.get(this.baseURL+'login.json');
  }
  GETSubmittedTransactions(){
    // return this.http.get('https://ngdemoapi.getsandbox.com/getSubmitedTransactions');
    return this.http.get('https://ngdemoapi.getsandbox.com/login')
  }

  // POSTSubmitingNewTransactions(newtrx){
  //   // return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  //   return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  // }

  GETCustomerDetailsByID(ID){
    // return this.http.get('https://ngdemoapi.getsandbox.com/customerById/'+ID);
    return this.http.get(this.baseURL+'customers/'+ID+'.json');
  }
  
  POSTNewCustomer(newCust){
    return this.http.post(this.baseURL+'customers.json',newCust);
  }
  
  POSTNewCustomerLogin(newLogin){
    return this.http.post(this.baseURL+'login.json',newLogin);
  }

  GETAllCustomersForAdmin(){
    return this.http.get(this.baseURL+'customers.json');
  }

  DELETECustomer(data){
    var uri = this.baseURL+'customers/'+data+'.json'
    return this.http.delete(uri);
  }

  POSTNewBranch(details){
    return this.http.post(this.baseURL+'branches.json',details);
  }

  GETBranchDetails(){
    return this.http.get(this.baseURL+'branches.json');
  }

  DELETEBranch(details){
    var uri =this.baseURL+'branches/'+details+'.json';
    return this.http.delete(uri);
  }

  POSTBeneficiary(ID,data){
    return this.http.post(this.baseURL+'customers/'+ID+'/beneficiary.json',data);
  }

  DELETEBeneficiary(custid,id){
    return this.http.delete(this.baseURL+'customers/'+custid+'/beneficiary/'+id+'.json');
  }

  PUTCustomerAddress(custid, data){
    return this.http.put(this.baseURL+'customers/'+custid+'/address.json',data);
  }

  PUTCustomerPhone(custid, data){
    return this.http.put(this.baseURL+'customers/'+custid+'/phone.json',data);
  }

  PUTBranchAddress(branchid, data){
    return this.http.put(this.baseURL+'branches/'+branchid+'/address.json',data);
  }

  PUTBranchPhone(branchid, data){
    return this.http.put(this.baseURL+'branches/'+branchid+'/contact.json',data);
  }

  POSTSubmitingNewTransactions(newtrx){
    return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  }

  GETDetailsByID(ID : string){
    return this.http.get('https://ngdemoapi.getsandbox.com/customerById/'+ID);
  }
}


