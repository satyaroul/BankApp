import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
reference : string;
  constructor() { }

  ngOnInit() {
    var rightNow = new Date();
    var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");  
    this.reference = "CUS"+res+Math.random().toFixed(2)*100;
  }

  onSubmit(form : NgForm){
    console.log(form);
  }
  prefill(){
    console.log("value entered now search")
  }

}
