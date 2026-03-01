import {Component, inject} from '@angular/core';
import {ShopHeaderComponent} from '../shop-header/shop-header';
import {ShopToolbarComponent} from '../shop-toolbar/shop-toolbar';
import {ProductGridComponent} from '../product-grid/product-grid';
import {PaginationComponent} from '../pagination/pagination';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [
    ShopHeaderComponent,
    ShopToolbarComponent,
    ProductGridComponent,
    PaginationComponent
  ],
  templateUrl: './shop-page.html',
  styleUrls: ['./shop-page.css'],
})
export class ShopPageComponent {

}
