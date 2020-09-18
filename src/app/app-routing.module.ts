import { ProductsComponent } from './products/products.component';
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
        path: '',
        component: PersonalComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
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
