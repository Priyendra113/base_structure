import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../core/authentication/auth-layout/auth-layout.component';
import { AdminAuthGuard } from '../core/guards/admin-auth.guard';
import { JcAuthGuard } from '../core/guards/jc-auth.guard';
import { SaAuthGuard } from '../core/guards/sa-auth.guard';
import { UnauthorizedAuthGuard } from '../core/guards/unauthorized-auth.guard';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  {
     path: '', component: AuthLayoutComponent, 
    children: [ { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule), canActivate:[UnauthorizedAuthGuard] } ]
  },
  {
    path: '', component: ModulesComponent, 
   children: [
      { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminAuthGuard] },
      { path: 'service-advisor', loadChildren: ()=> import('./service-advisor/service-advisor.module').then(m => m.ServiceAdvisorModule), canActivate:[SaAuthGuard] },
      { path: 'job-controller', loadChildren: ()=> import('./job-controller/job-controller.module').then(m => m.JobControllerModule), canActivate:[JcAuthGuard] }
     ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
