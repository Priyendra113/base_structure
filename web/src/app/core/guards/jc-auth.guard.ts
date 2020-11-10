import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JcAuthGuard implements CanActivate {

  currentRole:string;
  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.currentRole = localStorage.getItem('role');

      if(this.currentRole == null || this.currentRole == ''){
        this.router.navigate(['/web/login']);
        return false;
      }

      if(this.currentRole == 'JC'){
        return true;
      }
      this.router.navigate(['/web/login']);
      return false;
  }
  
}
