import { Component, OnInit, DoCheck } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';
import { Router } from '@angular/router';
import { APIcallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements DoCheck, OnInit{
branchData : any;
editTitle= "Branch"
token: string;
  constructor(private bankService : BankServicesService, private router : Router, private APIs : APIcallsService) { }

  ngDoCheck() {
    this.branchData = this.bankService.branchDetails;
    console.log(this.branchData);
  }
  ngOnInit(){
    this.branchData = this.bankService.branchDetails;
  }

  delete(data){
    console.log(data)
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.APIs.DELETEBranch(data).subscribe(response =>{
        console.log(response);
        this.bankService.fetchBranchDetails();
      });
      this.router.navigate(['/admin-overview/branches']);
  }); 
  }

  getToken(data){
    this.token = data;
  }
}
