import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return true; //false para desactivar acceso a rutas
  }

}
