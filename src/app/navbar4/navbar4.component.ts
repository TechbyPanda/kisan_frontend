import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
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

  @Output() send = new EventEmitter<any>();

  url:any;
  data?:any;
  appear=false;
  close=false;
  oldLocation:any;

  message(){
    this.send.emit(this.data);
  }
  
  toggle(){
    this.appear=!this.appear;
  }
  openDialog(): void {
    this.dialog.open(ConfirmComponent);
  }
  dataCalled(){
    this.router.navigate(['/search',this.data])
    this.send.emit(this.data);
    console.log("navbar "+this.data)
    if(this.data)
    {
      this.router.navigate(['search',this.data]);
    }
    else{
      this.router.navigate(['']);
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
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('name');
      this.router.navigate(['sign-in']);
    }
  }
}
