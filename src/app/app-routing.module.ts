import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Reports', pathMatch: 'full' },
  { path: 'ImageGallery', component: ImageGalleryComponent },
  { path: 'Reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
