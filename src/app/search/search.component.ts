import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  products:any[]=[];
  storage:any[]=[];
  constructor(private userService: UserService,private storageService: StorageService,private activatedRouter:ActivatedRoute,private router: Router) {
    this.activatedRouter.snapshot.paramMap.get('search')
    console.log(this.activatedRouter.snapshot.paramMap.get('search'));

    this.userService.User_search().subscribe(data=>{
      this.products = data;
      console.log(data);
    })
    // this.storageService.getStorage().subscribe(result => {
    //   console.log("storage")
    //   console.log(result);
    // })
    
}

    final:any[]=[];
    public search:string="";
    public searchStorages:string="";

    ngOnInit(): void {

      // this.router.events.subscribe(event=>{
      //   this.search =""+ this.activatedRouter.snapshot.paramMap.get('search');
      //   if(event instanceof NavigationEnd){
      //     this.search = ''+this.activatedRouter.snapshot.paramMap.get('search');
      //   }
      //  })
      
      }
  
}

