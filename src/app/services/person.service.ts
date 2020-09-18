import { Person } from '../models/person';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private urlAPI;
  constructor(
    private _httpCliente: HttpClient,
  ) {
    this.urlAPI = environment.apiURL;
  }
  requestPersonData$(_id: string): Observable<Person> {
    let url = this.urlAPI + '/person?' + _id;
    return this._httpCliente.get<Person>(url);
  }
}
