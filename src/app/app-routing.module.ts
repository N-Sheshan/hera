import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BillingContactComponent } from './billing-contact/billing-contact.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { ItEHRComponent } from './it-ehr/it-ehr.component';
import { LocationComponent } from './location/location.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PressComponent } from './press/press.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { SpecialtiesServicedComponent } from './specialties-serviced/specialties-serviced.component';
import { StatMenuComponent } from './stat-menu/stat-menu.component';
import { TestDirectoryComponent } from './test-directory/test-directory.component';
import { YourInsuranceComponent } from './your-insurance/your-insurance.component';


const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'Home' , component:HomepageComponent},
  {path:'specialties', component:SpecialtiesServicedComponent},
  {path:'it-ehr' ,component:ItEHRComponent},
  {path:'insurances',component:InsurancesComponent },
  {path:'update your_ insurance',component:YourInsuranceComponent },
   {path:'billing contact form',component:BillingContactComponent},
  {path:'payment',component:PaybillComponent},
  {path:'test_directory',component:TestDirectoryComponent},
  {path:'statmenu',component:StatMenuComponent},
  {path:'about-as',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'Press_Releases',component:PressComponent},
  {path:'jobprofiles',component:CareersComponent},
  {path:'sample',component:SampletestComponent},
  {path:'location',component:LocationComponent},
  {path:'login',component:LoginpageComponent}
  // {path:'update your_ insurance',component:YourInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
