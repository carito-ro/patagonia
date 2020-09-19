
import { GalleryService } from '../../../shared/services/gallery.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Picture } from '../../../shared/models/picture';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  arrPictures: Picture[];
  public error: string;
  public message: string;
  public spinner: boolean;
  gallerySubj: Subscription;
  constructor(
    public _router: Router,
    private _galleryService: GalleryService,
  ) {
    this.error = '';
    this.message = '';
    this.arrPictures = new Array();
  }
  ngOnInit(): void {
    this.getGallery();
  }
  getGallery() {
    this.spinner = true;
    this.gallerySubj = this._galleryService.getPictures$()
      .subscribe(
        data => {
          this.arrPictures = [];
          data.forEach((pictureData: any) => {
            this.arrPictures.push({
              id: pictureData.payload.doc.id,
              data: pictureData.payload.doc.data()
            });
          })
          this.spinner = false;
        }, error => {
          this.error = 'alert-warning';
          this.message = 'Error: Images not found...'
          this.spinner = false;
          console.log(error);
        }
      );
  }
  onUpload() {
    this._router.navigate(['/gallery/upload']);
  }
  async deletePicture(id) {
    try {
      this._galleryService.deletePicture(id);
    } catch (error) {
      this.error = 'alert-warning';
      this.message = 'Error deleting image...';
      this.spinner = false;
      console.log(error);
    }
  }
  ngOnDestroy() {
    this.gallerySubj ? this.gallerySubj.unsubscribe() : '';
  }
}
