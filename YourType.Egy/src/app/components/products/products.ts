import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../services/products_Service';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loading = true;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.loading = false;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}
