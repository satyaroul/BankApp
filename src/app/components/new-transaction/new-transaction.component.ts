import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { newTransactionModal } from './new-transaction.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  reference: any;
  resData: any;
  ID: string;
  cus_name: string;
  address: string;
  cell: number;
  res: any;
  t_currency = ['AED', 'EUR', 'CHF', 'MUR', 'USD'];
  constructor(private apicallservice: APIcallsService, private route: Router) { }

  ngOnInit() {
    var rightNow = new Date();
    var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
    this.reference = "CUS"+res+Math.random().toFixed(2)*100;
  }

  onSubmit(form: NgForm) {
    form.value.DATA.reference = this.reference;
    console.log(form.value.DATA.customer_number);
    console.log(form.value);

    this.apicallservice.POSTSubmitingNewTransactions(form.value)
      .subscribe(response => {
        this.res = response;
        if (this.res.status == "success") {
          window.alert('Transaction successful, Transaction Reference ID: ' + this.reference);
          this.route.navigate(['/overview/transactions']);
        }

      });
  }
  prefill() {
    if (this.ID.length >= 5) {
      this.apicallservice.GETDetailsByID(this.ID).subscribe(res => {
        console.log(res);
        this.resData = res;
        console.log(this.resData.CUST_INFO.COUNTRY);
        this.address = this.resData.CUST_INFO.COUNTRY;
        this.cus_name = this.resData.CUST_INFO.SHORT_NAME;
      });
    }
  }

}
