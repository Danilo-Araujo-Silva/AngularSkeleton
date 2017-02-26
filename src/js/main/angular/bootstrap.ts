import { environment } from './../model/configuration/environment/current';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { BoostrapModule } from './component/bootstrap/bootstrap.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BoostrapModule);
