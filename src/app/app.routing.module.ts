import {NgModel} from "@angular/forms";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {FeaturesComponent} from "./features/features.component";
import {PricingComponent} from "./pricing/pricing.component";
import {InustriesComponent} from "./inustries/inustries.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {TermComponent} from "./term/term.component";



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'industries', component:InustriesComponent},
  {path: 'features', component:FeaturesComponent},
  {path: 'price', component:PricingComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'term-of-use', component:TermComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
