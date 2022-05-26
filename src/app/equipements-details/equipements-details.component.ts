import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipements-details',
  templateUrl: './equipements-details.component.html',
  styleUrls: ['./equipements-details.component.css']
})
export class EquipementsDetailsComponent implements OnInit {

  constructor(private router:Router,private offcanvasService: NgbOffcanvas,private activatedRouter : ActivatedRoute,private adminService : AdminService) { }
  
   contact:any;     
  date:any;
  email:any;
  details:any;
  userId:any;
  user:any;
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
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
   this.adminService.service_Details(this.id).subscribe(data=>{
     this.userId = sessionStorage.getItem('id')
     this.details = data;
     console.log(this.details);
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
       console.log(result);
     })

  }
  
  items:any=[]
  single_items:any='';
  closeResult='';
  duration:any;

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content:any) {
    if(sessionStorage.getItem('id')){
      this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }else{
      this.router.navigate(['sign-in']);
    }
  }

  setData(id:any,price:any,name:any){
    this.tid = id;
    this.price = price;
    this.name = name;
    this.total = price;
}
}
