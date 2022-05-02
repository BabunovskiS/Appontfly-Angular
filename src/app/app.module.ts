import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InustriesComponent } from './inustries/inustries.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import {AppRoutingModule} from "./app.routing.module";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {TermComponent} from "./term/term.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InustriesComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    TermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
