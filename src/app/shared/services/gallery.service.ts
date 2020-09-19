import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(
    private firestore: AngularFirestore,
  ) { }
  /**
   * Obtiene la coleccion de Imagenes
   *
   * @returns {Observable<any>}
   * @memberof GalleryService
   */
  getPictures$(): Observable<any> {
    return this.firestore.collection('picture').snapshotChanges();
  }
  /**
   * Agrega una imagen a la Base de datos
   *
   * @param {{ title: string, image: string }} data
   * @returns {Promise<any>}
   * @memberof GalleryService
   */
  addPicture(data: { title: string, image: string }): Promise<any> {
    return this.firestore.collection('picture').add(data);
  }
  /**
   * Elimina una imagen de la Base de datos
   *
   * @param {*} id
   * @returns {Promise<any>}
   * @memberof GalleryService
   */
  deletePicture(id): Promise<any> {
    return this.firestore.collection('picture').doc(id).delete();
  }
}
