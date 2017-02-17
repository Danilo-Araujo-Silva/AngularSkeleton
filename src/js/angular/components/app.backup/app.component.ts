import { Component } from '@angular/core';
import { Config } from './../main/config/env.config';
import './../../configuration/operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
