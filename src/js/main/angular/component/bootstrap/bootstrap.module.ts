import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { RoutingModule } from './routing.module';

import { PublicComponent } from './../public/public.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  declarations: [
    PublicComponent
  ],
  providers: [],
  bootstrap: [PublicComponent]
})
export class BoostrapModule {

}
