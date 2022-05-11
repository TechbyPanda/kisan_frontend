import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User("", "", "", "", "", "");
  hide = true;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  loginForm!: FormGroup;

  constructor(private userService: UserService, private router: Router, private socialAuthservice: SocialAuthService , private notifyService:ToastrService) { }

    signIn(){
        this.userService.sign_In(this.user).subscribe(data=>{
          this.notifyService.success("Sing In Successfully..!!")
            sessionStorage.setItem("token",data.token);
          alert(data);
            sessionStorage.setItem("id",data.user._id); 
            this.router.navigate(['sign-in']);
        },err=>{
        console.log(err);
        if(err instanceof HttpErrorResponse){
          if(err.status == 400){
            this.notifyService.error("Somting is wrong..!")
          }
          else if(err.status == 500){
            this.notifyService.warning("Server Erorr ..!")
        }
      }
    });
  }
  
  loginInWithGoogle(): void {
    this.socialAuthservice.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.notifyService.success("Sing In Successfully.. !!")
  }

  refreshToken(): void {
    this.socialAuthservice.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.socialAuthservice.authState.subscribe(data=>{
      this. socialUser=data
    })
  }

}
