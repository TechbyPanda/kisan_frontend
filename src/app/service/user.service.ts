import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  sign_Up = 'http://localhost:3000/user/signup';
  signIn = 'http://localhost:3000/user/signin';
  constructor(private http: HttpClient) { }

  User_Signup(user:User){
    return this.http.post<any>(this.sign_Up,user);
  }
  sign_In(user:User){
    return this.http.post<any>(this.signIn,user);
  }
}