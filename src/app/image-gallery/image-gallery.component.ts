import { Component, OnInit } from '@angular/core';
import { ImageService } from '../core/services/index';
import { environment } from '../../environments/environment';
import { Image, UploadImageResponse } from '../core/interfaces/index';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  title = 'app';
  baseUrl = environment.baseUrl;
  images = [];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe((_images: Image[]) => {
      console.log('images: ' + _images);
      this.images = _images;
    });
  }
  uploadImage(imageName: string): void {
    this.imageService.uploadImage(imageName).subscribe((result: UploadImageResponse) => {
      console.log(result);
    });
  }
}
