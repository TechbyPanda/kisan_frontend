import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  constructor(private adminService: AdminService,private storageService: StorageService,private activatedRouter:ActivatedRoute,private router: Router) {
    
}

    final:any[]=[];
    public search:string="";
    public searchStorages:string="";

    ngOnInit(): void {

      this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          this.search = ''+this.activatedRouter.snapshot.paramMap.get('search');
        }
      })
      
    }
  
}
