import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  /**
   * @returns {number} New items length
   */
  addToCart(product: Product): number {
    return this.items.push(product);
  }

  /**
   * @returns {Product[]} A new array with the products in cart
   */
  getItems() {
    return [...this.items];
  }

  clearCart(): void {
    this.items = [];
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
