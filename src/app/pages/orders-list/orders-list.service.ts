import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndPoints } from 'src/app/features/common/apiEndPoints';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class OrdersListService {
  orderUrl: string;
  statusUrl: string;

  constructor(private httpClient: HttpClient) { }

  getOrders(status, pageIndex, pageSize): Observable<any> {
    if(status === "allOrders") {
      this.orderUrl = `${environment.APP_API_BASE}${APIEndPoints.orders.getAllOrders}`;
    } else {
      this.orderUrl = `${environment.APP_API_BASE}${APIEndPoints.orders.getAllOrders}?admin_status=${status}&page=${pageIndex}&per_page=${pageSize}`;
      
    }
    
    return this.httpClient.get(this.orderUrl, {observe: 'response'}).pipe(map(response => {
      if(response.status === 200) {
        return response.body;
      } else {
        alert("Something went wrong");
      }
    }))
  }

  getDeliveryBoyList() : any {
    const url = `${environment.APP_API_BASE}${APIEndPoints.orders.getDeliveryBoy}`;
    return this.httpClient.get(url, {observe: 'response'}).pipe(map(response => {
      if(response.status === 200) {
        return response.body;
      } else {
        alert("Something went wrong");
      }
    }));
  }

  setDeliveryNstatus(obj, order) {
    if(obj.order.packed) {
      this.statusUrl = `${environment.APP_API_BASE}${APIEndPoints.orders.getAllOrders}/${order.id}`;
      return this.httpClient.put(this.statusUrl, obj, {observe: 'response'}).pipe(map(response => {
        if(response.status === 200) {
          return response.body;
        } else {
          alert("Something went wrong");
        }
      }));
    } else if(obj.order.delivery_boy_id) {
      this.statusUrl = `${environment.APP_API_BASE}${APIEndPoints.orders.getAllOrders}/${order.id}`;
      return this.httpClient.put(this.statusUrl, obj, {observe: 'response'}).pipe(map(response => {
        if(response.status === 200) {
          return response.body;
        } else {
          alert("Something went wrong");
        }
      }));
    }  else {
      const statusObj = {};
      this.statusUrl = `${environment.APP_API_BASE}${APIEndPoints.orders.getAllOrders}/${order.id}/${obj.order.status}`;
       return this.httpClient.put(this.statusUrl, statusObj, {observe: 'response'}).pipe(map(response => {
      if(response.status === 200) {
        return response.body;
      } else {
        alert("Something went wrong");
      }
    }));
    }
  }
}
