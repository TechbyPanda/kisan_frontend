import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-equipements-details',
  templateUrl: './equipements-details.component.html',
  styleUrls: ['./equipements-details.component.css']
})
export class EquipementsDetailsComponent implements OnInit {

  constructor(private activatedRouter : ActivatedRoute,private adminService : AdminService) { }
  id:any;
  details:any;
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
   this.adminService. service_Details(this.id).subscribe(data=>{
     alert(data);
     this.details = data;
   })
   
  }

}
