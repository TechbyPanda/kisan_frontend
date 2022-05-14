import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  service = 'http://localhost:3000/service/view-services';
  service_details = 'http://localhost:3000/service/view-services/';
  user = 'http://localhost:3000/user/view/';
  customer = 'http://localhost:3000/machinary/book-machines/'
  constructor(private http:HttpClient) { }
  service_Api(){
    return this.http.get<any>(this.service);
  }
  service_Details(id:any){
    return this.http.get<any>(this.service_details+id);
  }
  
  customer_details(id:any,name:any,email:any,mobile:any,address:any,date:any){
    return this.http.post<any>(this.customer+id,{
       user:sessionStorage.getItem('id'),
       name:name,
       email:email,
       mobile:mobile,
       address:address,
       availableDate:date
    });
  }
  user_details(id:any){
    return this.http.get<any>(this.user+id);
  }
}
