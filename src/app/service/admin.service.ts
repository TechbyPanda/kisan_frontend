import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  fetch_service = 'http://localhost:3000/machinary/view';
  constructor(private http: HttpClient) { }

  service(){
    return this.http.get<any>(this.fetch_service);
  }
}
