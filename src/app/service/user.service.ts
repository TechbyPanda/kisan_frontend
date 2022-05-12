import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
import { ContractFarming } from '../model/contract-farming';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  sign_Up = 'http://localhost:3000/user/signup';
  signIn = 'http://localhost:3000/user/signin';
  
  contractFarming = 'http://localhost:3000/user/contract-farming';
  constructor(private http: HttpClient) { }

  User_Signup(user:User){
    return this.http.post<any>(this.sign_Up,user);
  }
  sign_In(user:User){
    return this.http.post<any>(this.signIn,user);
  }
  contract_Farming(formData:FormData){
    return this.http.post<any>(this.contractFarming,formData);
  }
  public checkToken():boolean{
    return !!sessionStorage.getItem('token');
  }
  
}
