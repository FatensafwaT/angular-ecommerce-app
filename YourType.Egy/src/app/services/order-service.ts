import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
   private ordersKey = 'orders';

  saveOrder(order: any) {
    const orders = this.getOrders();
    orders.push(order);
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));
  }

  getOrders() {
    return JSON.parse(localStorage.getItem(this.ordersKey) || '[]');
  }

  clearOrders() {
    localStorage.removeItem(this.ordersKey);
  }
}
