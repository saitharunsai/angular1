import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login } from './login';
import { posts } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSeviceService {

  
  apiurl = "http://localhost:3000/posts";
  // url = "https://truly-contacts.herokuapp.com/api/auth/login";

  constructor(private httpClient: HttpClient) { }


  getDetails(){
    return this.httpClient.get(this.apiurl)
  }
  saveDetails(data: any){
   return this.httpClient.post(this.apiurl,data)
  }
  deleteDetails(id: any){
    return this.httpClient.delete(`${this.apiurl}/${id}`) 
  }
  getCurrentDetails(id:any){
    return this.httpClient.get(`${this.apiurl}/${id}`)
  }
  updateDetails(id:any, data:any){
    return this.httpClient.put(`${this.apiurl}/${id}`,data)
  }

// savelogin(data:any){
//   return this.httpClient.post(this.url,data)
// }

}
