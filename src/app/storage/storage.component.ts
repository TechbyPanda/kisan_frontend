import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor() {
    
  }
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  fruits = [
    {name:'apple',selected:false},
    {name:'grape',selected:false},
    {name:'orange',selected:false},
    {name:'mango',selected:false},
    {name:'strawberry',selected:false}
  ]

  isSelected(){
    console.log(this.fruits);
  }

}
