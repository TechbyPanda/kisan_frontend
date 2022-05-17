import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service'

@Component({
  selector: 'app-my-storage',
  templateUrl: './my-storage.component.html',
  styleUrls: ['./my-storage.component.css']
})
export class MyStorageComponent implements OnInit {

  products:any='';

  constructor(private storage: StorageService) {
    this.storage.getBookedStorage()
    .subscribe(data=>{
      this.products = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


}
