import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getUserData(){
  return this.http.get('https://reqres.in/api/users?page=2');
  
    
  }
  
}
