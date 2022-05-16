import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { StorageFormComponent } from '../storage-form/storage-form.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(public dialog:MatDialog,public storageService: StorageService) {
    this.storageService.getStorage().subscribe(data => {
      this.storage=data;
      console.log(this.storage)
    })
  }
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  storage:any;

  items:any=[]
  single_items:any;

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

  open_dialog(){
    this.dialog.open(StorageFormComponent,{
      disableClose:false
    });
  }

  setdata(items:any){
    this.single_items=items;
  }

}
