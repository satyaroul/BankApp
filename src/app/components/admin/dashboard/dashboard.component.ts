import { Component, OnInit, DoCheck } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';
import { Router } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements DoCheck {
  allCustomersData : any;
  newKey = ""
  editTitle = "Customer";
  constructor( private bankService : BankServicesService, private router: Router, private APIs : APIcallsService) { 
  }

  ngDoCheck() {
    this.allCustomersData =  this.bankService.allCustomers;
  }

  delete(data){
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.APIs.DELETECustomer(data).subscribe(response =>{
        console.log(response);
        this.bankService.allCustomersForAdmin();
      });
      this.router.navigate(['/admin-overview']);
  }); 
  }
  getKey(data){
    this.newKey =data;
  }

}
