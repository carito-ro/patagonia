import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLagoutComponent } from './shared/admin-lagout/admin-lagout.component';
import { HeaderComponent } from './shared/header/header.component';
import { PersonalComponent } from './views/personal/personal.component';
import { ProductsComponent } from './views/products/products.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
registerLocaleData(localeEs, 'es-AR');
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
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
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'es-AR' },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
