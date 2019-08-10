import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { newTransactionModal } from './new-transaction.modal';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  reference: any;
  resData : any;
  ID : string;
  cus_name : string;
  address : string;
  cell : number;
  t_currency = ['AED', 'EUR', 'CHF', 'MUR', 'USD'];
  constructor(private apicallservice: APIcallsService) { }

  ngOnInit() {
    var rightNow = new Date();
    var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
    this.reference = "CUS" + res + Math.random().toFixed(2) * 100;
  }

  onSubmit(form: NgForm) {
    form.value.DATA.reference = this.reference;
    console.log(form.value.DATA.customer_number);
    console.log(form.value);

    this.apicallservice.POSTSubmitingNewTransactions(form.value)
      .subscribe(response => {
        console.log(response);

      });
  }
  prefill() {
    this.apicallservice.GETDetailsByID(this.ID).subscribe( res=>{
      console.log(res);
      this.resData = res;
      console.log(this.resData.CUST_INFO.COUNTRY);
      this.address = this.resData.CUST_INFO.COUNTRY;
      this.cus_name = this.resData.CUST_INFO.SHORT_NAME;
      // var x = this.resData.CUST_INFO.CONTACT_INFO_V7;
      // var y = x.PHONE_LIST_ITEM_V7;
      // var z = y.PHONE;
      // console.log(z);
      // this.cell = x;
    });
    console.log("value entered now search")
  }

}
