import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent} from './registration-page/registration-page.component';
import {SigninComponent} from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContractFarmingComponent } from './contract-farming/contract-farming.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipementsDetailsComponent } from './equipements-details/equipements-details.component';
import { StorageComponent } from './storage/storage.component';
import { Registration2Component } from './registration2/registration2.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { HistoryComponent} from './history/history.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'sign-up', component:Registration2Component},
  {path:'contract-farming', component:ContractFarmingComponent},
  {path:'services',component:EquipmentsComponent},
  {path:'book-service', component:EquipementsDetailsComponent},
  {path:'storage',component:StorageComponent},
  {path:'about-us',component:AbouUsComponent},
  {path:'equipment-details/:id',component:EquipementsDetailsComponent,canActivate:[AuthGuard]},
  {path:'history',component:HistoryComponent},
  {path:"**",component:ErrorhandlingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
