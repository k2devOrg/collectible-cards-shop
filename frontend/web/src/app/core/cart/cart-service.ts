import {computed, Injectable, signal} from '@angular/core';
import {CartItem} from '../../features/shop/models/cart-item';
import {Product} from '../../features/shop/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  readonly items = signal<CartItem[]>([]);

  totalItems = computed(() => {
    return this.items().reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  })
  totalPrice = computed(() => {
    return this.items().reduce((sum, item) => {
      return sum + item.quantity * item.price;

    }, 0);
  })

  add(product: Product) {
    this.items.update(items => {
      const existing = items.find(item => item.productId === product.id);

      if (!existing) {
        const newCartItem: CartItem = {
          productId: product.id,
          title: product.title,
          price: product.price,
          imgUrl: product.imgUrl,
          quantity: 1,
        };
        return [...items, newCartItem];
      }
      return items.map(item =>
        item.productId === product.id
          ? {...item, quantity: item.quantity + 1}
          : item
      );
    });
  }

  remove(productId: number) {
    this.items.update(items =>
      items.filter(item =>
        item.productId !== productId)
    );
  }

  increase(productId: number) {
    this.items.update(items =>
      items.map(item =>
        item.productId === productId ?
          {...item, quantity: item.quantity + 1} : item));
  }

  decrease(productId: number) {
    this.items.update(items =>
      items
        .map(item =>
          item.productId === productId ?
            {...item, quantity: item.quantity - 1} : item
        )
        .filter(item => item.quantity > 0));
  }

  clear() {
    this.items.set([]);
  }
}
