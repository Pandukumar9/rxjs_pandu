import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunObsComponent } from './fun-obs/fun-obs.component';
import { CancelingobserComponent } from './observables/cancelingobser/cancelingobser.component';

@NgModule({
  declarations: [
    AppComponent,
    FunObsComponent,
    CancelingobserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
