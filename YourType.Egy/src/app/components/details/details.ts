import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../services/products_Service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class DetailsComponent implements OnInit {
  productId!: number;
  product: Product | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.productId = Number(this.route.snapshot.paramMap.get('id'));


    this.productsService.getProductById(this.productId).subscribe(product => {
      this.product = product ?? null;
      this.loading = false;
    });
  }

  
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
