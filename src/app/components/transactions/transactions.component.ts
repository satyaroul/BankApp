import { Component, OnInit, DoCheck } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit ,DoCheck{
transactionDetails : any;
  constructor(private bankService :BankServicesService) { }

  ngOnInit() {
    this.bankService.submittedTransactions();
  }
  ngDoCheck(){
    this.transactionDetails = this.bankService.allTransactionDetails;
  }
}
