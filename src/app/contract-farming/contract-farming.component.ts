import { Component, OnInit } from '@angular/core';
import { ContractFarming } from 'src/app/model/contract-farming';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-contract-farming',
  templateUrl: './contract-farming.component.html',
  styleUrls: ['./contract-farming.component.css']
})
export class ContractFarmingComponent implements OnInit {
 contractFarming: ContractFarming = new ContractFarming("","","","","");
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  save(){
    this.userService.contract_Farming(this.contractFarming).subscribe(data=>{
      alert(data);
    })
  }
}
