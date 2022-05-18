import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { StorageFormComponent } from '../storage-form/storage-form.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(public dialog:MatDialog,public storageService: StorageService) {
    this.storageService.getStorage().subscribe(data => {
      this.storage=data;
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
  // fruits = [
  //   {name:'apple',selected:false},
  //   {name:'grape',selected:false},
  //   {name:'orange',selected:false},
  //   {name:'mango',selected:false},
  //   {name:'strawberry',selected:false},
  //   {name:'apple',selected:false},
  //   {name:'grape',selected:false},
  //   {name:'orange',selected:false},
  //   {name:'mango',selected:false},
  //   {name:'strawberry',selected:false}
  // ]


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

  open_dialog(){
    this.dialog.open(StorageFormComponent,{
      disableClose:false
    });
  }

  setdata(items:any){
    this.single_items=items;
    console.log(items);
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

}
