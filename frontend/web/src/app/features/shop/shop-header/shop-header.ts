import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {RevealOnScroll} from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [
    RouterLink,
    RevealOnScroll
  ],
  templateUrl: './shop-header.html',
  styleUrls: ['./shop-header.css'],
})
export class ShopHeaderComponent {

}
