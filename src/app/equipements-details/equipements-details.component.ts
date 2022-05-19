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
   contact:any;     
  date:any;
  email:any;
  details:any;
  userId:any;
  user:any;
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
   this.adminService.service_Details(this.id).subscribe(data=>{
     this.userId = sessionStorage.getItem('id')
     this.details = data;
     console.log(this.details);
     alert("details"+data);
   })
   
  }
  bookService(picker:any,name:any,email:any,mobile:any,address:any){
    console.log(picker._model.selection);
    console.log(name.value);
    console.log(email.value)
    console.log(address.value)
    console.log(mobile.value)
     this.adminService.customer_details(this.id,name.value,email.value,mobile.value,address.value,picker._model.selection).
     subscribe(result=>{
       alert(result);
     })

  }
}
