import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent} from './registration-page/registration-page.component';
import {SigninComponent} from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContractFarmingComponent } from './contract-farming/contract-farming.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipementsDetailsComponent } from './equipements-details/equipements-details.component';
import { StorageComponent } from './storage/storage.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'sign-up', component:RegistrationPageComponent},
  {path:'contract-farming', component:ContractFarmingComponent},

  {path:'services',component:EquipmentsComponent},
  {path:'book-service', component:EquipementsDetailsComponent},
  {path:'storage',component:StorageComponent},

  {path:'service',component:EquipmentsComponent},
  {path:'equipment-details/:id',component:EquipementsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
