import { Component, OnInit ,Input} from '@angular/core';
import { AdminService } from '../service/admin.service';
import { StorageService } from '../service/storage.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:any[]=[];
  storage:any[]=[];
  constructor(private adminService: AdminService,private storageService: StorageService) {
    this.adminService.service_Api().subscribe(data=>{
      this.final = data;
      // for(let product of data){
      //   this.final.push(product);
      // }
    })
    this.storageService.getStorage().subscribe(result=>{
      this.storage = result;
      for(let storage of result){
        this.final.push(storage)
      }
    });
  }

    final:any[]=[];
    @Input() public search:string="";
    public searchStorages:string="";
    ngOnInit(): void {
    }
  
}
