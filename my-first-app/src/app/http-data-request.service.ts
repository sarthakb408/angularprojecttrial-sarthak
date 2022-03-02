import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(public ht:HttpClient) { }

  getdata(){
    return this.ht.get("http://localhost:3000/users");
  }

  postData(user:any){
    return this.ht.post("http://localhost:3000/users" , user);
  }
}
