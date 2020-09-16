import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PictureComponent } from './picture/picture.component';
import { AddPictureComponent } from './add-picture/add-picture.component';

@NgModule({
  declarations: [GalleryComponent, PictureComponent, AddPictureComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
