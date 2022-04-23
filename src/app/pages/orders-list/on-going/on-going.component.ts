import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../modals/details/details.component';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss']
})
export class OnGoingComponent implements OnInit {
  onGoingList: any;
  count: number;
  itemsPerPage: number = 15;
  currentPage: number = 0;
  pageIndex: number = 1;
  isonGoing: boolean;
  isLoader: boolean;
  toast: { message: any; };
  showToaster: boolean;

  constructor(private ordersService: OrdersListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.showToaster = false;
    this.getOrders();
  }

  getOrders() {
    this.onGoingList = [];
    this.isLoader = true;
    this.ordersService.getOrders("Out for Delivery", this.pageIndex, this.itemsPerPage).subscribe((response: any) => {
      console.log(response.orders)
      this.onGoingList = response.orders;
      this.count = response.meta.total_count;
      this.isonGoing = this.count > 0 ? true : false;
      this.isLoader = false;
    });
  }

  details(order){
    const detailsModal = this.modalService.open(DetailsComponent);
    detailsModal.componentInstance.orderDetails = order;
    detailsModal.componentInstance.isPacked = false;
 }

 delivered(order) {
  this.showToaster = false;
   const obj = {
     order : {
       status: "delivered",
       admin_status: "delivered"
     }
   };
   this.ordersService.setDeliveryNstatus(obj, order).subscribe((response:any) => {
    this.getOrders();
   },
   error => {
    if(error.status === 422) {
      this.toast = {
        message: error.error.message,
      };
      this.showToaster = true;
    } else {
      this.toast = {
        message: error.message,
      };
      this.showToaster = true;
    }
  }
   );
 
 }

 pageChanged(event: number) {
   this.currentPage = event;
   this.pageIndex = event;
   if (event > 0) {
     this.pageIndex = event;
   }
   this.getOrders();
 }


}
