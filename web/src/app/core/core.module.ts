import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthLayoutComponent } from './authentication/auth-layout/auth-layout.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AuthLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
