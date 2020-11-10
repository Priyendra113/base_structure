import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { HeaderComponent } from '../core/header/header.component';
import { ServiceAdvisorModule } from './service-advisor/service-advisor.module';
import { JobControllerModule } from './job-controller/job-controller.module';
import { AdminModule } from './admin/admin.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../core/interceptors/auth-interceptor.service';
import { ErrorInterceptorService } from '../core/interceptors/error-interceptor.service';
import { AuthLayoutComponent } from '../core/authentication/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModulesComponent, HeaderComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ServiceAdvisorModule,
    JobControllerModule,
    AdminModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy},
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
                {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}]
})
export class ModulesModule { }
