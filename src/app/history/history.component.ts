import { Component, OnInit } from '@angular/core';
import {MatDialog,  MatDialogConfig} from '@angular/material/dialog';
import { ServicesService } from '../service/services.service';
import { HistoryDetailsComponent} from '../history-details/history-details.component';
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
  constructor(private dataService:ServicesService,public dialog: MatDialog) { }
  uid:any;
  historyData:any;
  itemData:any;
  ngOnInit(): void {
    this.uid = sessionStorage.getItem("id")
    this.dataService.viewOrder(this.uid).subscribe(data => {
    this.itemData = data
     alert(data);
     console.log(data);
    console.log(this.itemData);
    
    })
  }
  openDialog(product:any){
    this.dialog.open(HistoryDetailsComponent,{data:product});
  }

  cancelRequest(){
    alert("send request to admin")
  }
}
