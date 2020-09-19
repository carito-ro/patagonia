import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {
  }
  /**
   * Obtiene la coleccion de productos
   *
   * @returns {Observable<any>}
   * @memberof ProductService
   */
  getProducts$(): Observable<any> {
    return this.firestore.collection('product').snapshotChanges();
  }
}
