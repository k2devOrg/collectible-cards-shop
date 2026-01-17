import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CartService} from '../../../core/cart/cart-service';
import {RevealOnScroll} from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, RevealOnScroll],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css'],
})
export class CartPageComponent {
    cartService: CartService = inject(CartService);
}
