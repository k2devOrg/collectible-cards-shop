import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './shop-header.html',
  styleUrls: ['./shop-header.css'],
})
export class ShopHeaderComponent {

}
