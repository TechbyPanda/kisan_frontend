import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
// export interface History {
//   charges: string;
//   address: string;
//   mobile: string;
//   tool_name: string;
// }



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
 ite:any = 0;
  constructor(private dataService:ServicesService) { }
  uid:any;
  historyData:any;
  itemData:any;
  ngOnInit(): void {
    this.uid = sessionStorage.getItem("id")
    this.dataService.viewOrder(this.uid).subscribe(data => {
    this.historyData = data
     alert(data);
     console.log(data);
    console.log(this.historyData);
    
    })
  }
  cancelRequest(){
    alert("send request to admin")
  }
}
