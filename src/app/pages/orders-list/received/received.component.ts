import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../modals/details/details.component';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  
  itemsPerPage: number = 15;
  currentPage: number = 0;
  count: number = 0;
  pageIndex: number = 1;
  receivedList: any;
  deliveryBoyList: any;
  selectedDeliveryBoy: string;
  isLoader: boolean;
  showToaster: boolean;
  toast: { message: string };
  selectedRecord: string;

  constructor(private modalService: NgbModal,private ordersService: OrdersListService) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.showToaster = false;
    this.selectedRecord = '';
    this.getReceivedOrders();
    this.getDeliveryBoyList();
  }

  getReceivedOrders() {
    this.receivedList =  [];
    this.isLoader = true;
    this.selectedRecord = '';
    this.ordersService.getOrders("Received", this.pageIndex, this.itemsPerPage).subscribe((response: any) => {
      this.receivedList = response.orders;
      this.count = response.meta.total_count;
      this.isLoader = false;
      this.receivedList.forEach(element => {
        if(element.delivery_boy !== null) {
          element.selectedDeliveryBoy = element.delivery_boy.id;
        }
       
      });
    });
  }

  getDeliveryBoyList() {
    this.ordersService.getDeliveryBoyList().subscribe((response: any) => {
      this.deliveryBoyList = response.delivery_boys;
    });
  }

  setDeliveryBoy(order,deliveryBoy) {
    this.selectedRecord = ''
    const obj = {
      order : {
        delivery_boy_id: deliveryBoy
      }
    };
    this.ordersService.setDeliveryNstatus(obj,order).
    subscribe((response: any) => {
      this.getReceivedOrders();
    });
  }

  details(order) {
     const detailsModal = this.modalService.open(DetailsComponent);
     detailsModal.componentInstance.orderDetails = order;
     detailsModal.componentInstance.isPacked = true;
     detailsModal.componentInstance.packedEmit.subscribe(receivedData => {
      this.packed(order);
     });
  }

  packed(order) {
    this.selectedRecord  = '';
    const obj = {
      order : {
        packed: true
      }
    };
    this.ordersService.setDeliveryNstatus(obj, order).subscribe((response:any) => {
      this.getReceivedOrders();
    });
  
  }

  outOfDelivery(order) {
    this.selectedRecord  = '';
    this.showToaster = false;
    const obj = {
      order : {
        status: "out_for_delivery",
        admin_status: "out_for_delivery"
      }
    };
    this.ordersService.setDeliveryNstatus(obj, order).subscribe((response:any) => {
      this.getReceivedOrders();
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

  removeToaster() {
    this.showToaster = false;
  }

  getSelectedRecord(order) {
    this.selectedRecord = order.orderid;
  }

  pageChanged(event: number) {
    this.currentPage = event;
    this.pageIndex = event;
    if (event > 0) {
      this.pageIndex = event;
    }
    this.getReceivedOrders();
  }

}
