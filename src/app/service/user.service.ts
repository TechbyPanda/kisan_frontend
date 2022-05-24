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
  search = "http://localhost:3000/customer/search";
  search_product = "http://localhost:3000/customer/search-product";
  contractFarming = 'http://localhost:3000/contract/contract-farming';
  profile = 'http://localhost:3000/customer/view/';
  sign_Up = 'http://localhost:3000/customer/signup';
  signIn = 'http://localhost:3000/customer/signin';
  favorite = "http://localhost:3000/fav/favorite";
  orderApi = 'http://localhost:3000/order/pay';
  edit_profile = 'http://localhost:3000/customer/edit-profile/';
  view_favorite = 'http://localhost:3000/fav/view/';
  //contractFarming = 'http://localhost:4000/user/contract-farming';
  googleApi = "http://localhost:3000/customer/googleSignin";
  signin= "https://sociallogin1.herokuapp.com/user/googleSignin"
  // signin = "http://localhost:3000/googleLogin/googleSignin"
  constructor(private http: HttpClient) { }
  User_favorite_view(user_id:any){
    return this.http.get<any>(this.view_favorite+user_id);
  }
  User_favorite(tool_id:any,user_id:any){
    return this.http.post<any>(this.favorite,{
      tool_id:tool_id,
      user_id:user_id
    });
  }
  User_product(text:any){
    return this.http.post<any>(this.search_product,{
      text:text
    });
  }
  User_search(){
    return this.http.get<any>(this.search);
  }
  User_google(user:any,email:any){
    return this.http.post<any>(this.googleApi,{
      name:user,
      email:email
    });
  }
  logIn(email:string,name:string,provider:string){
    return this.http.post<any>(this.signin,{email:email,name:name,provider:provider});
  }
  User_editProfile(user:User,id:any){

    return this.http.post<any>(this.edit_profile+id,user);
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
