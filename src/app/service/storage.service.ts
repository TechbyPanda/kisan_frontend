import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  takeapi = "http://localhost:3000/storage/view-storage";

  constructor(private http:HttpClient) { }

  getStorage():Observable<any>{
    return this.http.get(this.takeapi)
  }
}
