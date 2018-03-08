import { Component, OnInit } from '@angular/core';
import { ImageService } from '../core/services/index';
import { environment } from '../../environments/environment';

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
    this.imageService.getImages().subscribe((_images: any[]) => {
      console.log('images: ' + _images);
      this.images = _images;
    });
  }
  uploadImage(imageName: string): void {
    this.imageService.uploadImage(imageName).subscribe((result: any) => {
      console.log(result);
    });
  }
}
