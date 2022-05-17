import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { ContractFarmingComponent } from './contract-farming/contract-farming.component';
import { UserService } from './service/user.service';
import { EquipmentsComponent } from './equipments/equipments.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { EquipementsDetailsComponent } from './equipements-details/equipements-details.component';
import { Registration2Component } from './registration2/registration2.component';
import { StorageComponent } from './storage/storage.component';
import { StorageDetailsComponent } from './storage-details/storage-details.component';
import { Navbar4Component } from './navbar4/navbar4.component';
import { Service2Component } from './service2/service2.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenService } from './token.service';
import { FooterComponent } from './footer/footer.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import {MatTableModule} from '@angular/material/table';
import { HistoryComponent } from './history/history.component';

import { ServiceDialogComponent } from './service-dialog/service-dialog.component';

import { ConfirmComponent } from './confirm/confirm.component';

import { StorageFormComponent } from './storage-form/storage-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyStorageComponent } from './my-storage/my-storage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationPageComponent,
    SigninComponent,
    Navbar2Component,
    ContractFarmingComponent,
    EquipmentsComponent,
    Service2Component,
    Navbar3Component,
    EquipementsDetailsComponent,
    Registration2Component,
    StorageComponent,
    StorageDetailsComponent,
    Navbar4Component,
    FooterComponent,
    AbouUsComponent,
    ErrorhandlingComponent,

    ViewPageComponent,
    Homepage2Component,

    HistoryComponent,

      ServiceDialogComponent,

      ConfirmComponent,
        StorageFormComponent,
        MyStorageComponent,


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
    SocialLoginModule,
    MatDialogModule,
    MatTableModule,
    CarouselModule ,
    ToastrModule.forRoot()
  ],
  
  providers: [
  UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
   },
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
          )
        },
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
