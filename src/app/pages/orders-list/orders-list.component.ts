import { relative } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  tabs: { id: number; name: string; url: string; }[];
  selectedRoute: string;
  public isActive;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.selectedRoute = 'received';
    this.tabs = [
      {"id": 1 , "name": 'Received', "url": 'received'},
      {"id": 2 , "name": 'Out for Delivery', "url": 'ongoing'},
      {"id": 3 , "name": 'Cancelled', "url": 'cancelled'},
      {"id": 4 , "name": 'Delivered', "url": 'delivered'},
      {"id": 5 , "name": 'All Orders', "url": 'allOrders'},
    ];

    this.route.children.forEach(route => {
      this.selectedRoute = route.routeConfig.path;
    });


  }

  getRoute(url) {
    this.selectedRoute = '';
    this.selectedRoute = url;
    this.router.navigate([url], { relativeTo: this.route });
  }

  // ngAfterViewInit() {
  //   const url: string = this.route.snapshot.url.join('');

  // }

  

}
