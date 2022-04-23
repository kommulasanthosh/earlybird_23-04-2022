import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FeaturesModule } from '../features/features.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EarlyHttpInterceptor } from '../features/common/earlyHttpInterceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FeaturesModule,
    FormsModule,
  ],
  
})
export class PagesModule { }
