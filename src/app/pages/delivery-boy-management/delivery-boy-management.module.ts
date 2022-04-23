import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryBoyManagementRoutingModule } from './delivery-boy-management-routing.module';
import { DeliveryBoyManagementComponent } from './delivery-boy-management.component';


@NgModule({
  declarations: [DeliveryBoyManagementComponent],
  imports: [
    CommonModule,
    DeliveryBoyManagementRoutingModule
  ]
})
export class DeliveryBoyManagementModule { }
