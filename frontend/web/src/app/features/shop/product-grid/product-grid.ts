import {Component, inject} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-grid.html',
  styleUrls: ['./product-grid.css'],
})
export class ProductGridComponent {

  router = inject(Router);
  onProductClicked(id: string | number) {
    this.router.navigate(['/shop/product', id]);
  }
  productList = [
    {
      id: 1,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-01.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 2,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 3,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-03.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 4,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-04.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 5,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-05.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 6,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-06.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 7,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-07.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
    {
      id: 8,
      imgUrl: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-08.jpg",
      title: 'To jest karta pokemon',
      category: 'Pokemon',
      subTitle: 'PokemonCard',
      price: 10,
      images: [
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
        'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      ]
    },
  ]

}
