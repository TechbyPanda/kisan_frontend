import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

import {UserService} from '../service/user.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  hide=true;

  constructor(private userService: UserService) { }
    user:User= new User("","","","","","");

  ngOnInit(): void {
  }
    public register(){
      alert("data");
      this.userService.User_Signup(this.user).subscribe(data=>{
        alert(data.msg);
        alert(data);
        if(!data)
        alert("data not found");
      })
    }
  
}
