import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
import { ContractFarming } from '../model/contract-farming';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // sign_Up = 'http://localhost:3000/user/signup';
  // signIn = 'http://localhost:3000/user/signin';
  
  contractFarming = 'http://localhost:3000/contract/contract-farming';
  profile = 'http://localhost:3000/customer/view/';
  sign_Up = 'http://localhost:3000/customer/signup';
  signIn = 'http://localhost:3000/customer/signin';
  orderApi = 'http://localhost:3000/order/pay';
  edit_profile = 'http://localhost:3000/customer/edit-profile/'
  //contractFarming = 'http://localhost:4000/user/contract-farming';
  googleApi = "http://localhost:3000/customer/googleSignin";
  signin= "https://sociallogin1.herokuapp.com/user/googleSignin"
  // signin = "http://localhost:3000/googleLogin/googleSignin"
  constructor(private http: HttpClient) { }
  User_google(user:any,email:any){
    return this.http.post<any>(this.googleApi,{
      name:user,
      email:email
    });
  }
  logIn(email:string,name:string,provider:string){
    return this.http.post<any>(this.signin,{email:email,name:name,provider:provider});
  }
  User_editProfile(id:any,email:any,address:any){
    return this.http.post<any>(this.edit_profile+id,{
      email:email,
      address:address,
    });
  }
  User_profile(id:any){
    return this.http.get<any>(this.profile+id);
  }
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
  public createOrder(amount:any){
    alert("called");
    return this.http.post<any>(this.orderApi,{amount});
   }
 
}
