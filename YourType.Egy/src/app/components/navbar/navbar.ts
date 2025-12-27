import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth-service';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "../../auth/auth-routing-module";
import { CartService } from '../../services/cart-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [CommonModule, AuthRoutingModule],
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  constructor(public authService: AuthService, private cartService: CartService) { }

  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.cartService.cartCount.subscribe(count => {
      this.cartCount = count;
    });
  }
}
