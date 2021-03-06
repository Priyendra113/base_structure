import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web/login', pathMatch:'prefix'},
  { path: 'web', loadChildren: ()=> import('./modules/modules.module').then(m => m.ModulesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
