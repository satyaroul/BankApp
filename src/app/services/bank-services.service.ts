import { Injectable } from '@angular/core';
import { APIcallsService } from './apicalls.service';

@Injectable({
  providedIn: 'root'
})
export class BankServicesService {
allTransactionDetails: any;
  constructor(private APIs : APIcallsService) { }

  submittedTransactions(){
    this.APIs.GETSubmittedTransactions().subscribe(response => {
        console.log(response);
        this.allTransactionDetails = response;
        console.log(this.allTransactionDetails)
      });
  }
}
