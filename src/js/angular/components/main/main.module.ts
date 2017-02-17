import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent,
    CommonModule, FormsModule, RouterModule]
})
export class MainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MainModule,
      providers: []
    };
  }
}
