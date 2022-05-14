import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
   
  constructor(private http: HttpClient) { }
  order = "http://localhost:3000/order/place-order";
  serviceOrder(service:Service){
    return this.http.post<any>(this.order,service)
  }
}
