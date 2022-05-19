import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Service } from '../model/service';
import { ServicesService } from '../service/services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceDialogComponent } from '../service-dialog/service-dialog.component';
import { ToastrService } from 'ngx-toastr';
declare let Razorpay:any
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  tools:any;
  paginate:any;
  totalLength?:number;
  page:number = 1;
   mobile:any;

  constructor(private dataService:ServicesService,private notifyService:ToastrService,public dialog: MatDialog,private adminService : AdminService,private userService: UserService,private router:Router) { }


  service: Service = new Service("", "", "", "", false, false,"","");
  bookingDate:any;
  username:any;
  orderList:any=[];
  total:any;
  address:any;
 id:any= sessionStorage.getItem("id");
  tid:any;
  price:any;
  name:any;
  ngOnInit(): void {
    this.username = sessionStorage.getItem("name");
    this.adminService.service_Api().subscribe(data=>{
      this.tools = data
      this.totalLength =data.length;
    })
  }
  

  items:any=[]
  single_items:any='';

  duration:any;




  isLoggedIn(){
    return this.userService.checkToken();
  }

  public checkWeight(event:any){
    
    if(event.target.value){
      this.total = this.price  * event.target.value*1;
      this.service.duration = event.target.value;
    }
  }
  setdata(items:any){
    this.single_items=items;
    console.log(items._id);
  }
  
  setData(id:any,price:any,name:any){
      this.tid = id;
      this.price = price;
      this.name = name;
      this.total = price;
  }
  service_item(id:any){
        this.router.navigate(['equipment-details',id]);
  }
  
 
  title = 'payment';
onPay(amount:any){
  if(this.isLoggedIn()){
  this.userService.createOrder(amount).subscribe(data=>{
      console.log(data);
       alert(data.id);
      var options = {
      "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
      "amount": amount*10, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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

    if(rzp1.open()){
      alert("successfully payment")
    }
    else{
        alert("unpayment");
    }
    })
  }
  else{
    alert("First login required");
    this.router.navigate(['sign-in']);
    }
  }
  
  
  selected:any;
  save(){
    alert("data");
    if(this.isLoggedIn()){
      this.onPay(this.total);
      this.orderList = [{bookingDate:this.bookingDate,tool_id:this.tid}];

      this.service.userId = this.id;
      this.service.payment = true;
      this.service.total = this.total;
     this.service.orderList = this.orderList;
     this.dataService.serviceOrder(this.service).subscribe(data =>{
       alert(data);
       console.log(data);
       this.notifyService.success("Order Booked Successfully..!!")

      },err=>{
       console.log(err);
       if(err instanceof HttpErrorResponse){
         if(err.status == 400){
           this.notifyService.error("user already exists...");
         }
         else if(err.status == 500){
           this.notifyService.warning("Something is wrong..!")
         // alert(err);
       }
     }
     })
  }
    else{
        this.router.navigate(['sign-in']);
    }
   
  }
}


