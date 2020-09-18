import { Picture } from './../models/picture';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private urlAPI;
  constructor(
    private _httpCliente: HttpClient,
  ) {
    this.urlAPI = environment.apiURL;
  }
  requestGallery$(): Observable<Picture[]> {
    let url = this.urlAPI + '/gallery';
    return this._httpCliente.get<Picture[]>(url);
  }
  requestAddImage$(value): Observable<string> {
    let url = environment.apiURL + '/image-add';
    // let data = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(value),
    // }
    return this._httpCliente.post<string>(url, JSON.stringify(value));
  }
  requestDeleteImage$(_id): Observable<any> {
    let url = environment.apiURL + '/image-delete';
    return this._httpCliente.delete(url + '/' + _id);
  }
}
