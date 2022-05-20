import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { StorageFormComponent } from '../storage-form/storage-form.component';
import { Router} from '@angular/router';
import { UserService } from '../service/user.service';
declare let Razorpay:any
@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
totalLength?:number;
page:number =1;
price?:any;

  constructor(public dialog:MatDialog,public storageService: StorageService,private router:Router,private userService:UserService) {
    this.storageService.getStorage().subscribe(data => {
      this.storage=data;
      this.totalLength = data.length;
      console.log(this.storage)
      console.log(this.storage.id)
    })
  }
  checks=[];

  ngOnInit(): void {
  }

  onChange(){
    
  }

  storage:any;

  items:any=[]
  single_items:any='';
  total:any=0 ;
  mobile:any;
  duration:any = '7';
  id:any;



  wiehgt(name:any,w:any,charges:any,kg:any){
    var temp:any={
      name:name,
      weight:w,
      amount:charges,
      kg:kg
    }
    this.items.push(temp);
    console.log(this.items);
    // this.calculate();
  }

  isSelected(name:any,weight:any){
    console.log(name);
    console.log(weight);
    console.log(this.items);
  }
  isLoggedIn(){
    return this.userService.checkToken();
  }
  open_dialog(){
    this.dialog.open(StorageFormComponent,{
      disableClose:false
    });
  }

  setdata(items:any){
    this.single_items=items;
    console.log(items._id);
  }

  calculate(day:any){
    var calc:number;
    
    for(let items of this.items){
      console.log(items);
      var temp = parseInt(items.weight) /parseInt(items.kg);
      console.log(temp)
      calc = temp*1 * items.amount;
      console.log("amount" +calc);
      this.total += calc*1*day;
    }
    console.log(this.total);
  }

  book(){
    console.log(this.storage.id);
    this.storageService.bookStorage(this.single_items._id,this.total,this.items,this.mobile)
    .subscribe(data =>{
      alert("booked successfully");
      console.log(data);
    });
  }

  itemsData(item:any,bookingDate:any,endDate:any,weight:any){
    var temp = {
      name:item.name,
      amount:item.charges,
      bookingDate:bookingDate,
      endDate:endDate,
      weight:weight,
      kg:item.weight
    }
    this.items.push(temp);
    var date1 = new Date(bookingDate);
    var date2 = new Date(endDate);
    var minusDate = date1.getTime() - date2.getTime();
    var totalDays = minusDate / (1000 * 3600 * 24);
    if(totalDays < 0) {
      totalDays *= -1;
    }
    alert(totalDays);
    this.calculate(totalDays);
  }

  
  public checkWeight(event:any, itemName:any){
    let button = document.getElementById('btn'+itemName) as HTMLButtonElement | null;
    if(event.target.value*1 > 100){
        if(button!=null)
        button.disabled = false;
    }else if(button!=null){
        button.disabled = true;
    }
  }
  save(){
     if(this.isLoggedIn()){

      console.log(this.items);
      this.onPay(this.total);
      this.storageService.bookStorage(this.single_items._id,this.total,this.items,this.mobile).subscribe(data=>{
        alert("result++++"+data);
        console.log(data);
      })
    }
    else{
        this.router.navigate(['sign-in']);
    }
   
  }
  
  title = 'payment';
onPay(amount:any){
  var amt = parseInt(amount);
  if(this.isLoggedIn()){
  this.userService.createOrder(amount).subscribe(data=>{
      console.log(data);
       alert(data.id);
      var options = {
      "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
      "amount": amt*10, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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
  console.log(options);
  alert("dear++++"+options);
  var rzp1 = new Razorpay(options);

    rzp1.open()
      
    })
  }
}

trackByIndex(index: number, obj: any): any {
  return index;
}

  }