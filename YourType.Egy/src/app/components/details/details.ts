import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../services/products_Service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
 productId!: number;
     product: Product | null = null;
    loading = true;

  constructor(private route: ActivatedRoute,
    private productsService:ProductsService,
    private cartService:CartService) {}

   ngOnInit() {
  
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    
    this.productsService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
      },
      error: () => {
        this.product = null;
        this.loading = false;
      },
    });
  }
  addToCart(product: any) {
  this.cartService.addToCart(product);

  
  
}
}
