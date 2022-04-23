import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EarlyHttpInterceptor } from './common/earlyHttpInterceptor';


@NgModule({
  declarations: [HeaderComponent, SideNavComponent, CommonLayoutComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
  ]
})
export class FeaturesModule { }
