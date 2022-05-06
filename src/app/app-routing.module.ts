import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent} from './registration-page/registration-page.component';
import {SigninComponent} from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContractFarmingComponent } from './contract-farming/contract-farming.component';
import { EquipmentsComponent} from './equipments/equipments.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'sign-up', component:RegistrationPageComponent},
  {path:'contract-farming', component:ContractFarmingComponent},
  {path:'service',component:EquipmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
