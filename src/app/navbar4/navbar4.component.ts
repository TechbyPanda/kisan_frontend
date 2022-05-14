import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component implements OnInit {

  constructor(private userService: UserService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  appear=false;
  close=false;
  
  toggle(){
    this.appear=!this.appear;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Navbar4Component, {
      width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
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
