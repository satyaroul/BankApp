import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{APIcallsService} from 'src/app/services/apicalls.service';
import {newTransactionModal} from './new-transaction.modal';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
reference : string;
userData: newTransactionModal;
t_currency =['AED', 'EUR', 'CHF', 'MUR', 'USD'];
  constructor(private apicallservice: APIcallsService) { }

  ngOnInit() {
    var rightNow = new Date();
    var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");  
    this.reference = "CUS"+res+Math.random().toFixed(2)*100;
  }

  onSubmit(form : NgForm){
    form.value.reference = this.reference;
    // console.log(this.userData.customer_number);
    console.log(form.value);
    // console.log(form.value)
    this.userData.reference = this.reference;
    this.userData.customer_number = form.value.customer_number;
    this.userData.customer_name = form.value.customer_name;
    this.userData.customer_phone_number = form.value.customer_phone_number;
    this.userData.transfer_amount = form.value.transfer_amount;
    this.userData.transfer_currency = form.value.transfer_currency;
    this.userData.beneficiary_bank = form.value.beneficiary_bank;
    this.userData.beneficiary_account_number = form.value.beneficiary_account_number;
    this.userData.payment_details = form.value.payment_details;
    console.log(this.userData.customer_number)

    this.apicallservice.POSTSubmitingNewTransactions(this.userData)
    .subscribe(response => {
      console.log(response);
      
    });
    

  }
  prefill(){
    console.log("value entered now search")
  }

}
