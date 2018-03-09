import { Component, OnInit } from '@angular/core';
import { ImageService } from '../core/services/index';
import { ToastyService } from 'ng2-toasty';
import { environment } from '../../environments/environment';
import { Image, UploadImageResponse } from '../core/interfaces/index';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  title = 'app';
  isLoading: boolean;
  baseUrl = environment.baseUrl;
  images = [];

  constructor(private imageService: ImageService, private toastyService: ToastyService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.imageService.getImages().subscribe((_images: Image[]) => {
      console.log('images: ' + _images);
      this.images = _images;
      this.isLoading = false;
    }, errorResponse => {
      this.toastyService.error(`${errorResponse.message}`);
      this.isLoading = false;
    });
  }
  uploadImage(imageName: string): void {
    this.isLoading = true;
    this.imageService.uploadImage(imageName).subscribe((result: UploadImageResponse) => {
      this.toastyService.success(`Image uploaded successfully!`);
      console.log(result);
      this.isLoading = false;
    }, errorResponse => {
      this.toastyService.error(`${errorResponse.message}`);
      this.isLoading = false;
    });
  }
}
