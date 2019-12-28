import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';
import { Router } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit, DoCheck {
  editPhone = "";
  editAddress = "";
  @Input() title: string;
  @Input() token: string;
  constructor(private bankService: BankServicesService, private router: Router, private APIs: APIcallsService, private loginService: LoginService) { }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  DoEdits() {
    if (this.title.toLowerCase() == "customer") {
      if (this.editAddress != "" && this.editPhone != "") {
        var address = JSON.stringify(this.editAddress);
        this.APIs.PUTCustomerAddress(this.token, address).subscribe(response => {
          this.bankService.allCustomersForAdmin();
        });
        var phone = JSON.stringify(this.editPhone);
        this.APIs.PUTCustomerPhone(this.token, phone).subscribe(response => {
          this.bankService.customerDetailsByID(this.token);
        });
      } else if (this.editPhone != "") {
        var data = JSON.stringify(this.editPhone);
        this.APIs.PUTCustomerPhone(this.token, data).subscribe(response => {
          this.bankService.customerDetailsByID(this.token);
          this.bankService.allCustomersForAdmin();
        });

      } else if (this.editAddress != "") {
        var data = JSON.stringify(this.editAddress);
        this.APIs.PUTCustomerAddress(this.token, data).subscribe(response => {
          this.bankService.customerDetailsByID(this.token);
          this.bankService.allCustomersForAdmin();
        });
      }
    } else if (this.title.toLowerCase() == "branch") {
      if (this.editAddress != "" && this.editPhone != "") {
        var address = JSON.stringify(this.editAddress);
        this.APIs.PUTBranchAddress(this.token, address).subscribe(response => {
          this.bankService.fetchBranchDetails();
        });
        var phone = JSON.stringify(this.editPhone);
        this.APIs.PUTBranchPhone(this.token, phone).subscribe(response => {
        });
      } else if (this.editPhone != "") {
        var data = JSON.stringify(this.editPhone);
        this.APIs.PUTBranchPhone(this.token, data).subscribe(response => {
          this.bankService.fetchBranchDetails();
        });

      } else if (this.editAddress != "") {
        var data = JSON.stringify(this.editAddress);
        this.APIs.PUTBranchAddress(this.token, data).subscribe(response => {
          this.bankService.fetchBranchDetails();
        });
      }
    }

  }

}
