import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AdministrationModule } from './../administration/administration.module';
//import { DevelopmentModule } from './../development/development.module';
//import { PublicModule } from './../public/public.module';
//import { UserModule } from './../user/user.module';

const routes: Routes = [
//	{ path: '', redirectTo: '/public', pathMatch: 'full' },
//	{ path: 'administration', component: AdministrationModule },
//	{ path: 'public', component: PublicModule },
//	{ path: 'development', component: DevelopmentModule },
//	{ path: 'user', component: UserModule }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}