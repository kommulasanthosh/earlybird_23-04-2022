import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListRoutingModule } from './orders-list-routing.module';
import { OrdersListComponent } from './orders-list.component';
import { ReceivedComponent } from './received/received.component';
import { OnGoingComponent } from './on-going/on-going.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { DetailsComponent } from './modals/details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrdersListComponent, ReceivedComponent, OnGoingComponent, DeliveredComponent,
     CancelledComponent, AllOrdersComponent, DetailsComponent],
  imports: [
    CommonModule,
    OrdersListRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
    
  ]

})
export class OrdersListModule {

 }
