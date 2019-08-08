import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIcallsService {

  constructor(private http :HttpClient) { }

  GETLogin(){
    return this.http.get('https://ngdemoapi.getsandbox.com/login');
  }
}
