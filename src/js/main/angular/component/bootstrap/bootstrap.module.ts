import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

import { PublicModule } from './../public/public.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BootstrapRoutingModule,
		PublicModule
  ],
  declarations: [
  	BootstrapComponent
  ],
  providers: [
  ],
	bootstrap: [
		BootstrapComponent
	]
})
export class BoostrapModule {
}
