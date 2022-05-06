import { Component, OnInit } from '@angular/core';
import {AdminService } from '../service/admin.service';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
 tools:any;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.service().subscribe(data=>{
      alert(data);
      this.tools = data;
    })
  }
  
}
