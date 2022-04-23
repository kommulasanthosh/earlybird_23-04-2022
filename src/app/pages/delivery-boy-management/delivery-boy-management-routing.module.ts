import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/features/common-layout/common-layout.component';

import { DeliveryBoyManagementComponent } from './delivery-boy-management.component';

const routes: Routes = [{ path: '', component: DeliveryBoyManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryBoyManagementRoutingModule { }
