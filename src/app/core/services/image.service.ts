import { Observable } from 'rxjs/';
import { Api } from './api';

import { Injectable } from '@angular/core';
// TODO: add/import interfaces
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class ImageService {
  private path = 'api/';

  constructor(private api: Api) { }

  public getImages(): Observable<any> {
    return this.api.get(`${this.path}list/`);
  }

  public uploadImage(filename: string): Observable<any> {
    return this.api.post(`${this.path}upload/`, {'pastebin_api_key' : '1339a9c3b35678477f1579df08772c12', 'filename' : filename});
  }
}
