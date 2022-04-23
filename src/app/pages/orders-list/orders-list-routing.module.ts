import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/features/common-layout/common-layout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { OnGoingComponent } from './on-going/on-going.component';

import { OrdersListComponent } from './orders-list.component';
import { ReceivedComponent } from './received/received.component';

const routes: Routes = [{
  path: '', data: { restrict: ['ordersList'] }, component: CommonLayoutComponent,
  children: [
    {
      path: '', component: OrdersListComponent,
      children: [
        { path: 'received', component: ReceivedComponent },
        { path: 'ongoing', component: OnGoingComponent },
        { path: 'delivered', component: DeliveredComponent },
        { path: 'cancelled', component: CancelledComponent },
        { path: 'allOrders', component: AllOrdersComponent }
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersListRoutingModule { }
