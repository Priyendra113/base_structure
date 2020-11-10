import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedAuthGuard implements CanActivate {

  currentRole:string;
  constructor(public router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.currentRole = localStorage.getItem('role');
      if(this.currentRole == null || this.currentRole == ''){
        return true;
      }

      if(this.currentRole != null || this.currentRole != ''){
        switch (this.currentRole) {
          case 'SA':  this.router.navigate(['/web/service-advisor/sa-dashboard']);
            break;
          case 'JC':  this.router.navigate(['/web/job-controller/jc-dashboard']);
            break;
          case 'Admin':  this.router.navigate(['/web/admin/admin-dashboard']);
            break;
        
          default:
            break;
        }
        return false;
      }
  }
  
}
