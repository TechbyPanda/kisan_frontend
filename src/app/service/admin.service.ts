import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  service = 'http://localhost:3000/machinary/view';
  service_details = 'http://localhost:3000/machinary/view/';
  constructor(private http:HttpClient) { }
  service_Api(){
    return this.http.get<any>(this.service);
  }
  service_Details(id:any){
    return this.http.get<any>(this.service_details+id);
  }
}
