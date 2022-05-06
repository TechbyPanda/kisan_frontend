import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/model/user';
import { HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User= new User("","","","","","");
  constructor(private userService: UserService) { }

  

  ngOnInit(): void {
  }
   signIn(){
     alert("Sign");
       this.userService.sign_In(this.user).subscribe(data=>{
         alert("User signed in successfully");
         alert(data.msg);
           sessionStorage.setItem("token",data.msg);
       },err=>{
        console.log(err);
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
           alert(err);
          }
          else if(err.status == 500){
         alert(err);
  
          }
        }
  
       }
       )
   }
}
