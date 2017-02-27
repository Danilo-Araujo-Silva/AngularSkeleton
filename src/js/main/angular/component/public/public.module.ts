import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
	imports: [
		CommonModule,
		PublicRoutingModule
	],
	declarations: [
		PublicComponent
	],
	exports: [
		PublicComponent
	]
})
export class PublicModule {
}
