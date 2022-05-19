import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute ,NavigationStart, Event as NavigationEvent} from '@angular/router';
import { UserService } from '../service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import {Location} from '@angular/common';


@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component implements OnInit {
  event$:any;
  constructor(private _location: Location,private userService: UserService,private router: Router,public dialog: MatDialog,private ac : ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  // this.event$
  //     =this.router.events
  //         .subscribe(
  //           (event: NavigationEvent) => {
  //             if(event instanceof NavigationStart) {
  //               console.log(event.url);
  //             }
  //           });

  url:any;
  data?:any;
  appear=false;
  close=false;
  
  toggle(){
    this.appear=!this.appear;
  }
  openDialog(): void {
    this.dialog.open(ConfirmComponent);
  }
  dataCalled(){
    
    if(this.data)
    {
      this.router.navigate(['search']);
    }
    else{
      this.router.navigate([''+this._location.back()]);
    }
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
