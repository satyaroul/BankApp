import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router'; 
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { OperationsComponent } from './components/admin/operations/operations.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { BranchesComponent } from './components/admin/branches/branches.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'customer-overview' , component: AppLayoutComponent , children:[
    { path: '', component: HomeComponent },
    { path: 'newTransaction', component: NewTransactionComponent },
    { path: 'transactions' , component: TransactionsComponent }
  ]
  },
  {path: 'admin-overview' , component: AppLayoutComponent , children:[
    { path: '' , component: DashboardComponent },
    { path: 'operations' , component: OperationsComponent },
    { path: 'branches' , component: BranchesComponent }
  ]
  },
  { path: 'refresh' , component: RefreshComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
