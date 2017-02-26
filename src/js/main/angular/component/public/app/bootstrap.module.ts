import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import {CalendarModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MainModule } from './../main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MainModule.forRoot(),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BoostrapModule { }
