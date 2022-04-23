import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [{ path: '', component: PagesComponent },
 { path: 'ordersList', loadChildren: () => import('./orders-list/orders-list.module').then(m => m.OrdersListModule) },
 { path: 'deliveryBoyManagement', loadChildren: () => import('./delivery-boy-management/delivery-boy-management.module').then(m => m.DeliveryBoyManagementModule) },
 { path: 'dataManagement', loadChildren: () => import('./data-management/data-management.module').then(m => m.DataManagementModule) },
 { path: 'paymentDetails', loadChildren: () => import('./payment-details/payment-details.module').then(m => m.PaymentDetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
