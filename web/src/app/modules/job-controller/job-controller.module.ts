import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobControllerRoutingModule } from './job-controller-routing.module';
import { JcDashboardComponent } from './jc-dashboard/jc-dashboard.component';


@NgModule({
  declarations: [JcDashboardComponent],
  imports: [
    CommonModule,
    JobControllerRoutingModule
  ]
})
export class JobControllerModule { }
