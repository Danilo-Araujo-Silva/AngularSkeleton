import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationComponent } from './../administration/administration.component';
import { PublicComponent } from './../public/public.component';
import { DevelopmentComponent } from './../development/development.component';
import { UserComponent } from './../user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'administration', component: AdministrationComponent },
  { path: 'public', component: PublicComponent },
  { path: 'development', component: DevelopmentComponent }
  { path: 'user',     component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}