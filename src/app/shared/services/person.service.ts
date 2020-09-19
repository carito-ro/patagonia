import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private firestore: AngularFirestore,
  ) { }

  /**
   * Crea una persona
   *
   * @param {{ name: string, image: string, email: string, aboutMe: string }} data
   * @returns
   * @memberof PersonService
   */
  createPerson(data: { name: string, image: string, email: string, aboutMe: string }) {
    return this.firestore.collection('person').add(data);
  }

  /**
   * Obtiene una persona
   *
   * @memberof PersonService
   */
  getPerson$(documentId: string): Observable<any> {
    return this.firestore.collection('person').doc(documentId).snapshotChanges();
  }

  /**
   * Obtiene la coleccion de personas
   *
   * @returns
   * @memberof PersonService
   */
  getPeople$(): Observable<any> {
    return this.firestore.collection('person').snapshotChanges();
  }

}
