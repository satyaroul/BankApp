import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router'; 
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login' ,pathMatch:'full'},
  {path: 'login' , component:LoginComponent}

  { path: 'newTransaction', component: NewTransactionComponent },
  { path: 'transactions' , component: TransactionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
