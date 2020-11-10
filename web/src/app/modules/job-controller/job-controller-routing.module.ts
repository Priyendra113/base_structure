import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JcDashboardComponent } from './jc-dashboard/jc-dashboard.component';

const routes: Routes = [
  {path: 'jc-dashboard', component: JcDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobControllerRoutingModule { }
