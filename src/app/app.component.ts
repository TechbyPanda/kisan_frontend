import { Component ,Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  searchData:any;

  searchSend($event: any) {
    console.log("app.component "+$event)
    this.searchData = $event;
  }
}
