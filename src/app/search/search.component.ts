import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { StorageService } from '../service/storage.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:any;
  productStorage:any;
  constructor(private adminService: AdminService,private storageService: StorageService) {
    this.adminService.service_Api().subscribe(data=>{
      this.products = data;

    })
    this.storageService.getStorage().subscribe(result=>{
      
      this.productStorage = result;
    })
   }
   public search:string="";
   public searchStorages:string="";
  ngOnInit(): void {
  }
  
}
