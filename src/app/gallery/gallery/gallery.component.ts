
import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HardcodeService } from './../../services/hardcode.service';
import { Picture } from '../../models/picture';
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
  gallerySubj: Subscription;
  constructor(
    public _router: Router,
    private _galleryService: GalleryService,
    private _hardcodeService: HardcodeService
  ) {
    this.error = '';
    this.message = '';
    this.arrPictures = new Array();
  }
  ngOnInit(): void {
    //  this.getGallery();
    this.arrPictures = this._hardcodeService.pictures;
  }
  getGallery() {
    this.gallerySubj = this._galleryService.requestGallery$()
      .subscribe(
        data => {
          if (data) {
            this.arrPictures = data;
          } else {
            this.error = 'alert-danger';
            this.message = "no images found...";
          }
        }, error => {
          this.error = 'alert-warning';
          this.message = 'Error: Images not found...'
          console.log(error);
        }
      );
  }
  onUpload() {
    this._router.navigate(['/gallery/upload']);
  }
  deletePicture(id) {
    this.gallerySubj = this._galleryService.requestDeleteImage$(id)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.getGallery
          } else {
            this.error = 'alert-danger';
            this.message = "can't delete image...";
          }
        }, error => {
          this.error = 'alert-warning';
          this.message = 'Error deleting image...';
          console.log(error);
        }
      );
  }
  ngOnDestroy() {
    this.gallerySubj ? this.gallerySubj.unsubscribe() : '';
  }
}
