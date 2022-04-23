import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../modals/details/details.component';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {
  itemsPerPage: number = 15;
  currentPage: number = 0;
  count: number = 0;
  pageIndex: number = 1;
  deliveredList: any;
  isDelivered: boolean;
  isLoader: boolean;

  constructor(private ordersService: OrdersListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.getDeliveredList();

  }

  getDeliveredList() {
    this.deliveredList = [];
    this.isLoader = true;
    this.ordersService.getOrders("Delivered", this.pageIndex, this.itemsPerPage).subscribe((response: any) => {
      this.deliveredList = response.orders;
      this.count = response.meta.total_count;
      this.isDelivered = this.count > 0 ? true : false;
      this.isLoader = false;
    });
  }

  details(order) {
    const detailsModal = this.modalService.open(DetailsComponent);
    detailsModal.componentInstance.orderDetails = order;
    detailsModal.componentInstance.isPacked = false;
 }

 pageChanged(event: number) {
   this.currentPage = event;
   this.pageIndex = event;
   if (event > 0) {
     this.pageIndex = event - 1;
   }
   this.getDeliveredList();
 }


}
