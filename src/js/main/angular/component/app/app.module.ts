import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
	Router,
	Event as RouterEvent,
	NavigationStart,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicModule } from './../public/public.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
		PublicModule
  ],
  declarations: [
  	AppComponent
  ],
  providers: [
  ],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	// loading: boolean = true;
	//
	// constructor(private router: Router) {
	// 	router.events.subscribe((event: RouterEvent) => {
	// 		this.navigationInterceptor(event);
	// 	});
	// }
	//
	// navigationInterceptor(event: RouterEvent): void {
	// 	if (event instanceof NavigationStart) {
	// 		this.loading = true;
	// 	} else if (event instanceof NavigationEnd) {
	// 		setTimeout(() => this.loading = false, 1000);
	// 	} else if (event instanceof NavigationCancel) {
	// 		this.loading = false;
	// 	} else if (event instanceof NavigationError) {
	// 		this.loading = false;
	// 	}
	// }
}
