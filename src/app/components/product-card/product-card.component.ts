import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: ' div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  onAddCart(product: Product) {
    this.productEventEmitter.emit(product);
  }

  @Output() productEventEmitter : EventEmitter<Product> = new EventEmitter();

  @Input() product!: Product;
  
}
