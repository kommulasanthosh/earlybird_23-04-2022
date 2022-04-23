import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../modals/details/details.component';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  itemsPerPage: number = 15;
  currentPage: number = 0;
  count: number = 0;
  pageIndex: number = 1;
  allOrdersList: any;
  isAllOrder: boolean;
  isLoader: boolean;

  constructor(private ordersService: OrdersListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.getAllOrders();
  }

  getAllOrders() {
    this.allOrdersList = [];
    this.isLoader = true;
    this.ordersService.getOrders("allOrders", this.pageIndex, this.itemsPerPage).subscribe((response: any) => {
      this.allOrdersList = response.orders;
      this.count = response.meta.total_count;
      this.isAllOrder = this.count > 0 ? true : false;
      this.isLoader = false;
    });
  }

  details(order){
    const detailsModal = this.modalService.open(DetailsComponent);
    detailsModal.componentInstance.orderDetails = order;
    detailsModal.componentInstance.isPacked = false;
 }

 

 pageChanged(event: number) {
   this.currentPage = event;
   this.pageIndex = event;
   if (event > 0) {
     this.pageIndex = event;
   }
   this.getAllOrders();
 }

}
