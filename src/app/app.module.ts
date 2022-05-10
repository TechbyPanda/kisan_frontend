import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SigninComponent } from './signin/signin.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { ContractFarmingComponent } from './contract-farming/contract-farming.component';

import { EquipmentsComponent } from './equipments/equipments.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { EquipementsDetailsComponent } from './equipements-details/equipements-details.component';
import { Registration2Component } from './registration2/registration2.component';
import { StorageComponent } from './storage/storage.component';
import { StorageDetailsComponent } from './storage-details/storage-details.component';
import { Navbar4Component } from './navbar4/navbar4.component';
import { Service2Component } from './service2/service2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationPageComponent,
    SigninComponent,
    Navbar2Component,
    HomeComponent,

    ContractFarmingComponent,

    EquipmentsComponent,
      Navbar3Component,
      EquipementsDetailsComponent,
      Registration2Component,
      StorageComponent,
      StorageDetailsComponent,
      Navbar4Component,
      Service2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,

    MatSidenavModule,
    MatListModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
