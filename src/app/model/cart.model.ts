import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quanttity: number = 1) {
    const line = this.lines.find(line => line.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quanttity;
    } else {
      this.lines.push(new CartLine(product, quanttity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.lines.find(line => line.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    const index = this.lines.findIndex(line => line.product.id === id);
    this.lines.splice(index);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {
  }

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
