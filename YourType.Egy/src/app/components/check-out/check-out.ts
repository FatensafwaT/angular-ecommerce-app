import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { OrderService } from '../../services/order-service';
import { CartService } from '../../services/cart-service';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-check-out',
  imports: [CommonModule,FormsModule],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut implements OnInit {
orderData = {
    name: '',
    email: '',
    address: '',
    phone: ''
  };
 cartItems: any[] = [];
  totalPrice: number = 0; 

  constructor(private orderService: OrderService,private cartService:CartService,private api: ApiService) {}
  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  placeOrder() {

    const order = {
      customer: this.orderData,
      total: this.totalPrice,
      date: new Date()
    };

    this.orderService.saveOrder(order);
    this.cartService.clearCart();

    alert('Order placed successfully ✅');

    
    this.orderData = {
      name: '',
      email: '',
      address: '',
      phone: ''
    };
  }
}
