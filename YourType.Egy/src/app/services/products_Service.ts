import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of} from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Product[] = [
  {
    id: 1,
    title: 'Classic Hoodie',
    price: 1200,
    description: 'A cozy classic hoodie made from soft, high-quality fabric. Perfect for everyday wear and casual outings.',
    image: 'assets/images/hoodie1.jpg'
  },
  {
    id: 2,
    title: 'Modern Hoodie',
    price: 850,
    description: 'A modern-style hoodie designed for comfort and a trendy look. Ideal for daily casual outfits.',
    image: 'assets/images/hoodie2.jpg'
  },
  {
    id: 3,
    title: 'Premium Hoodie',
    price: 2000,
    description: 'A premium hoodie with a stylish design and excellent fabric quality, offering warmth and elegance.',
    image: 'assets/images/hoodie3.jpg'
  },
  {
    id: 4,
    title: 'Urban Hoodie',
    price: 1500,
    description: 'An urban-inspired hoodie that combines comfort with a fashionable street-style look.',
    image: 'assets/images/hoodie4.jpg'
  },
  {
    id: 5,
    title: 'Minimal Hoodie',
    price: 500,
    description: 'A minimal and lightweight hoodie, perfect for layering and relaxed casual wear.',
    image: 'assets/images/hoodie5.jpg'
  },
  {
    id: 6,
    title: 'Casual Pants',
    price: 1800,
    description: 'Comfortable casual pants made for everyday use, offering both flexibility and style.',
    image: 'assets/images/pants1.jpg'
  },
  {
    id: 7,
    title: 'Slim Fit Pants',
    price: 600,
    description: 'Slim-fit pants designed for a clean and modern look, suitable for casual and semi-formal outfits.',
    image: 'assets/images/pants2.jpg'
  },
  {
    id: 8,
    title: 'Classic Pants',
    price: 1300,
    description: 'Classic pants with a timeless design, providing comfort and durability for daily wear.',
    image: 'assets/images/pants3.jpg'
  },
  {
    id: 9,
    title: 'Comfort Pants',
    price: 900,
    description: 'Soft and breathable pants that ensure maximum comfort throughout the day.',
    image: 'assets/images/pants4.jpg'
  },
  {
    id: 10,
    title: 'Everyday Pants',
    price: 400,
    description: 'Simple and practical pants designed for everyday comfort and easy styling.',
    image: 'assets/images/pants5.jpg'
  }
];


  constructor() { }

 
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

 
  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
