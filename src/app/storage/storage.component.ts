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

  public items=[{
    apple:false,grap:false,orange:false,
  }]

  

}
