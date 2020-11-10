import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';

const routes: Routes = [
  {path: 'sa-dashboard', component: SaDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceAdvisorRoutingModule { }
