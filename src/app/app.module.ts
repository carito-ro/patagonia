import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLagoutComponent } from './admin-lagout/admin-lagout.component';
import { HeaderComponent } from './header/header.component';
import { PersonalComponent } from './personal/personal.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLagoutComponent,
    HeaderComponent,
    PersonalComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
