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

  constructor(private dataService:ServicesService) { }
  uid:any;
  historyData?:any;
  itemData:any;
  ngOnInit(): void {
    this.uid = sessionStorage.getItem("id")
    this.dataService.viewOrder(this.uid).subscribe(data => {
    this.historyData = data
     
    console.log(this.historyData);
    
    })
  }
  // history:History[] = this.historyData;
  // displayedColumns: string[] = ['name','charges','address' ,'mobile','bookingDate'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  // // dataSource: Data = this.historyData;
  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }

  // shuffle() {
  //   let currentIndex = this.columnsToDisplay.length;
  //   while (0 !== currentIndex) {
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // Swap
  //     let temp = this.columnsToDisplay[currentIndex];
  //     this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
  //     this.columnsToDisplay[randomIndex] = temp;
  //   }
  // }
}
