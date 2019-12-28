import { Component, OnInit } from '@angular/core';
import { BankServicesService } from 'src/app/services/bank-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private bankService : BankServicesService) { 
    
  }

  ngOnInit() {
    
  }

}
