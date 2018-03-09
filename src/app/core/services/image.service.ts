import { Observable } from 'rxjs/';
import { Api } from './api';

import { Injectable } from '@angular/core';
// TODO: add/import interfaces
import { HttpHeaders } from '@angular/common/http';
import { Image, UploadImage, UploadImageResponse } from '../interfaces/index';
import { PASTE_BIN_API_KEY } from '../utils';


@Injectable()
export class ImageService {
  private path = 'api/';

  constructor(private api: Api) { }

  public getImages(): Observable<Image[]> {
    return this.api.get(`${this.path}list/`);
  }

  public uploadImage(filename: string): Observable<UploadImageResponse> {
    return this.api.post(`${this.path}upload/`, new UploadImage(PASTE_BIN_API_KEY, filename));
  }
}
