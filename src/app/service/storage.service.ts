import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  takeapi = "http://localhost:3000/substore/view";

  constructor(private http:HttpClient) { }

  getStorage():Observable<any>{
    return this.http.get(this.takeapi)
  }
}
