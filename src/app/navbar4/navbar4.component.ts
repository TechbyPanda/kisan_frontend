import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.css']
})
export class Navbar4Component implements OnInit {

  constructor() { }

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
}
