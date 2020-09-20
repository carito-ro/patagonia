import { NotFoundComponentComponent } from './views/not-found-component/not-found-component.component';
import { ProductsComponent } from './views/products/products.component';
import { PersonalComponent } from './views/personal/personal.component';
import { AdminLagoutComponent } from './shared/admin-lagout/admin-lagout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLagoutComponent,
    canActivate: [AuthGuard],
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
            loadChildren: () => import('./views/gallery/gallery.module').then(m => m.GalleryModule),
          },
        ]
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
