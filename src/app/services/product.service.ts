import { Product } from './../models/product';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlAPI;
  constructor(
    private _httpCliente: HttpClient,
  ) {
    this.urlAPI = environment.apiURL;
  }
  requestProducts$(): Observable<Product[]> {
    let url = this.urlAPI + '/products';
    return this._httpCliente.get<Product[]>(url);
  }
}
