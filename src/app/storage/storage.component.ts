import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor() { }
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  public items=[{
    apple:false,grap:false,orange:false,
  }]

  getvalue(value:any){
    console.log(this.items)
    // console.log(value.childNodes[0].value);
    console.log(value.target.childNodes[0].value);
    console.log(value.target.childNodes[0].checked);
  }

}
