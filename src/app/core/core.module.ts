import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastyModule, ToastyService } from 'ng2-toasty';
import { Api, ImageService } from './services/index';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
  imports: [
    ToastyModule.forRoot(),
    HttpClientModule,
    RouterModule,
    CommonModule],
  providers: [Api, ImageService],
  declarations: [
    NavigationComponent
  ],
  exports: [
    HttpClientModule, ToastyModule, NavigationComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
