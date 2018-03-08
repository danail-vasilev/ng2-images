import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Api, ImageService } from './services/index';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule],
  providers: [Api, ImageService],
  declarations: [
  ],
  exports: [
    HttpClientModule]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
