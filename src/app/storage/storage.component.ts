import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(public storageService: StorageService) {
    this.storageService.getStorage()
    .subscribe(data=>{
      this.storage = data;
      console.log(this.storage);
    })
  }
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  storage:any;

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
