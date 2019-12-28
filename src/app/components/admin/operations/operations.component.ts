import { Component, OnInit } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  title = "Add New Customer"
  newCustomer = {
    name: "",
    address: "",
    email: "",
    password: "",
    phone: null,
    DOB: "",
    branch: "",
    ifsc: "",
    balance: null
  }
  newBranch = {
    name: "",
    address: "",
    IFSC: "",
    contact: ""
  }
  constructor(private bankService: BankServicesService) { }

  ngOnInit() {
  }

  addBranch() {
    console.log(this.newBranch);
    this.bankService.createNewBranch(this.newBranch);
  }

}
