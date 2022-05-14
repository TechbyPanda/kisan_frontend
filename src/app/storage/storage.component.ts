import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(public storageService: StorageService) {}
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  storage:any;

  items:any=[]

  fruits = [
    {name:'apple',selected:false},
    {name:'grape',selected:false},
    {name:'orange',selected:false},
    {name:'mango',selected:false},
    {name:'strawberry',selected:false},
    {name:'apple',selected:false},
    {name:'grape',selected:false},
    {name:'orange',selected:false},
    {name:'mango',selected:false},
    {name:'strawberry',selected:false}
  ]

  wiehgt(name:any,w:any){
    var temp:any={
      name:name,
      weight:w
    }
    this.items.push(temp);
  }

  isSelected(name:any,weight:any){
    console.log(name);
    console.log(weight);
    console.log(this.items);
  }

}
