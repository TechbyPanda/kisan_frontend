import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  takeapi = "http://localhost:3000/storage/view-storage";
  customerStorage = "http://localhost:3000/booked-storage/add/";
  userStorage = "http://localhost:3000/booked-storage//view-booked/"
  storagebyId = "http://localhost:3000/storage/view-storage/"

  constructor(private http:HttpClient) { }

  getStorage():Observable<any>{
    return this.http.get(this.takeapi)
  }

  bookStorage(sid:any,total:any,items:any,duration:any):Observable<any>{
    var uid = sessionStorage.getItem('id');
    return this.http.post(this.customerStorage+''+uid+'/'+sid,{items,total,duration})
  }
  getBookedStorage():Observable<any>{
    return this.http.get(this.userStorage+''+sessionStorage.getItem('id'));
  }

  getStorageById(id:any):Observable<any>{
    console.log(id);
    return this.http.get(this.storagebyId+""+id);
  }
}
