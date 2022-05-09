import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fixed:boolean = false;
  toggle:boolean=false;

  toggleFun(){
    this.toggle =! this.toggle;
  }

  @HostListener('window:scroll',['$event']) onScroll(){
    if(window.scrollY > 100){
      this.fixed = true;
    }else{
      this.fixed = false;
    }
  }

}
