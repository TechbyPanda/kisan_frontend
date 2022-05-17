import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user?:any;
  // user1: User = new User("", "", "", "", "", "");
  constructor(private UserService: UserService) { }
  id:any=sessionStorage.getItem("id");
  ngOnInit(): void {
    this.UserService.User_profile(this.id).subscribe(data=>{
      alert(data);
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
