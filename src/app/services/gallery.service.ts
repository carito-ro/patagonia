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
  getPictures$(): Observable<any> {
    return this.firestore.collection('picture').snapshotChanges();
  }
  addPicture(data: { title: string, image: string }): Promise<any> {
    return this.firestore.collection('picture').add(data);
  }
  deletePicture(id): Promise<any> {
    return this.firestore.collection('picture').doc(id).delete();
  }
}
