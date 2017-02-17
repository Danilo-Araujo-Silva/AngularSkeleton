import './configuration/dependencies';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './../environments/default';
import { instant } from './configuration/instant';

import { AppModule } from './components/app/app.module';
import { TestModule } from './components/test/test.module';

if (environment.production) {
  enableProdMode();
}

if (!instant.test) {
  platformBrowserDynamic().bootstrapModule(AppModule);
} else {
  platformBrowserDynamic().bootstrapModule(TestModule);
}
