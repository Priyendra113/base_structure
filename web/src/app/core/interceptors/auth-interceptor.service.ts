import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method

    let token =  "token"; //localStorage.getItem("token") 
    if(token != null){
      req = req.clone({
        setHeaders:{
          Authorization: token
        }
      });

    }else{
      req = req.clone({
        setHeaders:{
          "Content-Type" : 'application/json'
        }
      });
    }

    return next.handle(req).pipe(
      finalize(() => this.spinner.hide())
    )
}

}
