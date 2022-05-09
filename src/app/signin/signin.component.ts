import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User("", "", "", "", "", "");
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  loginForm!: FormGroup;

  constructor(private userService: UserService, private router: Router, private formbuilder: FormBuilder, private socialAuthservice: SocialAuthService) { }

  signIn() {
    alert("Sign");
    this.userService.sign_In(this.user).subscribe(data => {
      alert("User signed in successfully");
      alert(data.msg);
      sessionStorage.setItem("token", data.msg);
    }, err => {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401) {
          alert(err);
        }
        else if (err.status == 500) {
          alert(err);
        }
      }
    });
  }
  loginInWithGoogle(): void {
    this.socialAuthservice.signIn(GoogleLoginProvider.PROVIDER_ID);
    //this.socialAuthservice.signIn(GoogleLoginProvider.PROVIDER_ID)
      // .then(result => {
      //   console.log(result);
      // }).catch(err => {
      //   console.log(err);
      // })
  }

  refreshToken(): void {
    this.socialAuthservice.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  hide = true;

  ngOnInit(): void {
    this.socialAuthservice.authState.subscribe(data=>{
      this. socialUser=data
    })
  }

}
