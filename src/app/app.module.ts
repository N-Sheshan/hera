import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';


import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { SpecialtiesServicedComponent } from './specialties-serviced/specialties-serviced.component';

import { InsurancesComponent } from './insurances/insurances.component';
import { ItEHRComponent } from './it-ehr/it-ehr.component';
import { YourInsuranceComponent } from './your-insurance/your-insurance.component';
import { BillingContactComponent } from './billing-contact/billing-contact.component';
import { PaybillComponent } from './paybill/paybill.component';
import { TestDirectoryComponent } from './test-directory/test-directory.component';
import { StatMenuComponent } from './stat-menu/stat-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PressComponent } from './press/press.component';
import { CareersComponent } from './careers/careers.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { LocationComponent } from './location/location.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


// import { NgImageSliderModule } from 'ng/image/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpecialtiesServicedComponent,
   
    InsurancesComponent,
    ItEHRComponent,
    YourInsuranceComponent,
    BillingContactComponent,
    PaybillComponent,
    TestDirectoryComponent,
    StatMenuComponent,
    AboutUsComponent,
    ContactUsComponent,
    PressComponent,
    CareersComponent,
    SampletestComponent,
    LocationComponent,
    LoginpageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,MatButtonModule,SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
