import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptorService  implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if(err.status === 401){
        localStorage.clear();
        this.spinner.hide();
        this.router.navigate(['/login'])
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
