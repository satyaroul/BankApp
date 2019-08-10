import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {newTransactionModal} from '../components/new-transaction/new-transaction.modal';

@Injectable({
  providedIn: 'root'
})
export class APIcallsService {
  
  constructor(private http :HttpClient) { }

  GETLogin(){
    return this.http.get('https://ngdemoapi.getsandbox.com/login');
  }
  GETSubmittedTransactions(){
    return this.http.get('https://ngdemoapi.getsandbox.com/getSubmitedTransactions');
  }

  POSTSubmitingNewTransactions(newtrx){
    return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  }

  GETDetailsByID(ID : string){
    return this.http.get('https://ngdemoapi.getsandbox.com/customerById/'+ID);
  }
}


