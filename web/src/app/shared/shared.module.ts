import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonPopupComponent } from './modals/common-popup/common-popup.component';
import { SafePipe } from './pipes/safe.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [CommonPopupComponent, SafePipe, FilterPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
