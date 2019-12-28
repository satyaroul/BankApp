import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { HeaderComponent } from './components/header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModelComponent } from './components/login/login-model/login-model.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { OperationsComponent } from './components/admin/operations/operations.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { BranchesComponent } from './components/admin/branches/branches.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewTransactionComponent,
    TransactionsComponent,
    HeaderComponent,
    AppLayoutComponent,
    LoginModelComponent,
    AdminComponent,
    DashboardComponent,
    OperationsComponent,
    RefreshComponent,
    BranchesComponent,
    SignUpComponent,
    EditDetailsComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
