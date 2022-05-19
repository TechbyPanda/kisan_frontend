import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import custom validator  class
import { CustomValidators } from '../providers/CustomValidation';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  success = '';
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [Validators.required])
    },

    // CustomValidators.mustMatch('password', 'confirmPassword') // insert here
  );
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.success = JSON.stringify(this.registerForm.value);
  }
  submitted = false;

  user?:any;
  // user1: User = new User("", "", "", "", "", "");
  constructor(private UserService: UserService) { }
  id:any=sessionStorage.getItem("id");
  ngOnInit(): void {
    this.UserService.User_profile(this.id).subscribe(data=>{
      alert(data);
      console.log(data);
      this.user = data;
    })
  }
 save(email:any,address:any){
   console.log(email.value);
   console.log(address);
   this.UserService.User_editProfile(this.id,email,address).subscribe(data=>{
     console.log(data);
     alert("save");
   })
 }
}
