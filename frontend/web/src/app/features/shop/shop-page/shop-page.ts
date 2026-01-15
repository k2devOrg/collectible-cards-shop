import { Component } from '@angular/core';
import {RevealOnScroll} from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [
    RevealOnScroll
  ],
  templateUrl: './shop-page.html',
  styleUrls: ['./shop-page.css'],
})
export class ShopPageComponent {

}
