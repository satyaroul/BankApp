import { Component, OnInit, Input } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() title : String;
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
  constructor(private bankService : BankServicesService) { }

  ngOnInit() {
  }

  addCustomer() {
    console.log(this.newCustomer);
    this.bankService.saveNewCustomer(this.newCustomer);
  }
}
