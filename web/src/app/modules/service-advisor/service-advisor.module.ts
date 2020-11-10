import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceAdvisorRoutingModule } from './service-advisor-routing.module';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';


@NgModule({
  declarations: [SaDashboardComponent],
  imports: [
    CommonModule,
    ServiceAdvisorRoutingModule
  ]
})
export class ServiceAdvisorModule { }
