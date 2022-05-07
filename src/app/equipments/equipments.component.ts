import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
 tools:any;
  constructor(private adminService : AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.service_Api().subscribe(data=>{
      alert(data);
      this.tools = data


    })
  }
   service_item(id:any){
     console.log("call");
     alert("data");
        this.router.navigate(['equipment-details',id]);
   }

}
