import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  appear=false;
  close=false;
  
  toggle(){
    this.appear=!this.appear;
  }

  toggle2(){
    this.close=!this.close;
  }

  isLoggedIn():boolean{
    return this.userService.checkToken();
  }
  signOut(){
    if(confirm("Are you Sure ?")){
      sessionStorage.removeItem('token');
      this.router.navigate(['sign-in']);
    }
  }
}
