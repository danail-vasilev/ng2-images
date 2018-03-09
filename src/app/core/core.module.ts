import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastyModule, ToastyService } from 'ng2-toasty';
import { Api, ImageService } from './services/index';

@NgModule({
  imports: [
    ToastyModule.forRoot(),
    HttpClientModule,
    RouterModule,
    CommonModule],
  providers: [Api, ImageService],
  declarations: [
  ],
  exports: [
    HttpClientModule, ToastyModule]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
