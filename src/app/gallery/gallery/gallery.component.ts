
import { Component, OnInit } from '@angular/core';
import { HardcodeService } from './../../services/hardcode.service';
import { Picture } from '../../models/picture';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  arrPictures: Picture[];
  constructor(public _router: Router,
    private _hardcodeService: HardcodeService
  ) {
    this.arrPictures = this._hardcodeService.pictures;
  }
  ngOnInit(): void {
  }
  onUpload() {
    this._router.navigate(['/gallery/upload']);
  }
  deletePicture(id) {
    console.log("Delete ID: " + id);
  }
}
