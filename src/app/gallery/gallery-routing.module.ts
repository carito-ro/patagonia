import { AddPictureComponent } from './add-picture/add-picture.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'upload',
    component: AddPictureComponent,
  },
  {
    path: '',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
