import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products_Service';
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

  products: any[] = [];
  loading = true;

  constructor(
  private ProductService: ProductsService,
  private cartService: CartService,
  private router: Router
) {}


ngOnInit() {
    this.ProductService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }


  addToCart(product: any) {
  this.cartService.addToCart(product);

  
  
}
goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }


}

