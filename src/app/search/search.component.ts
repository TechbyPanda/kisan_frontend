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
  services:any;
  storages:any;
  text:any;
  
  constructor(private userService: UserService,private storageService: StorageService,
    private activatedRouter:ActivatedRoute,private router: Router) {
      router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          this.text = this.activatedRouter.snapshot.paramMap.get('search')
          console.log(this.activatedRouter.snapshot.paramMap.get('search'));
      
          this.userService.User_product(this.text).subscribe(data=>{
            
            this.storages = data.storage;
            this.services = data.service;
          })
        }
      })
    
    
}

    ngOnInit(): void { 
      }
  
}

