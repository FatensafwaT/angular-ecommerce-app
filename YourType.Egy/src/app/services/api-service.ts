import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
   private baseUrl = 'https://example.com/api'; 

  constructor(private http: HttpClient) {}

  
  getProducts(): Observable<any[]> {
    // return this.http.get<any[]>(`${this.baseUrl}/products`);

    
    return of([
      { id: 1, title: 'Product 1', price: 120 },
      { id: 2, title: 'Product 2', price: 200 }
    ]);
  }

 
  createOrder(order: any): Observable<any> {
    // return this.http.post(`${this.baseUrl}/orders`, order);

    
    console.log('Order sent to API:', order);
    return of({ success: true });
  }
}
