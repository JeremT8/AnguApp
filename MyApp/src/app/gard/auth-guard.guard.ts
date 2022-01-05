import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

   constructor(private security: AuthentificationService, private notification: NotificationService) {

   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.security.user.isAuthentificated) {
      return true;
    }
    this.notification.setMessage("Vous devez etre connectez pour accedez à cette page")
    return false;
  }
  

  
}
