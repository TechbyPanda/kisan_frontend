import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

  constructor(private toster :ToastrService ) { }

  ngOnInit(): void {
  }

  hide=true;

}
