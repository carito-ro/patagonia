import { ProductComponent } from './product/product.component';
import { PersonalComponent } from './personal/personal.component';
import { AdminLagoutComponent } from './admin-lagout/admin-lagout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminLagoutComponent,
    children: [
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
          },
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
