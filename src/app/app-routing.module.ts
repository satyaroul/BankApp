import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router'; 
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'overview' , component: AppLayoutComponent , children:[
    { path: '', component: HomeComponent },
    { path: 'newTransaction', component: NewTransactionComponent },
    { path: 'transactions' , component: TransactionsComponent }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
