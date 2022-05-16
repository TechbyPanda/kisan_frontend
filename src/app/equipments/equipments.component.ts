import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

import { ServiceDialogComponent } from '../service-dialog/service-dialog.component';


import { Service } from '../model/service';

declare let Razorpay:any
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  tools:any;
  


  constructor(public dialog: MatDialog,private adminService : AdminService,private userService: UserService,private router:Router) { }

  service: Service = new Service("", "", "", "", false, false,"","");




  ngOnInit(): void {
    this.adminService.service_Api().subscribe(data=>{
      this.tools = data
    })
  }
  service_item(id:any){
        this.router.navigate(['equipment-details',id]);
  }
  isLoggedIn():boolean{
    return this.userService.checkToken();
  }

  title = 'payment';
onPay(amount:any){
  if(this.isLoggedIn()){
  this.userService.createOrder(amount).subscribe(data=>{
      console.log(data);
      alert(data);
      var options = {
      "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
      "amount": "10000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:3000/order/payment-status",
      "prefill": {
          "name": "Devika Kushwah",
          "email": "devikakushwah29@gmail.com",
          "contact": "8770784399"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  alert("dear"+options);
  var rzp1 = new Razorpay(options);

    rzp1.open();
    })
  }
  else{
    alert("First login required");
    this.router.navigate(['signIn']);
    }
  }
  
  opendialogue(){
    this.dialog.open(ServiceDialogComponent,{
      disableClose:false
    });
  }
}




