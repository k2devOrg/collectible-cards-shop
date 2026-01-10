import { Component } from '@angular/core';
import {RevealOnScroll} from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [
    RevealOnScroll
  ],
  templateUrl: './categories-section.html',
  styleUrls: ['./categories-section.css'],
})
export class CategoriesSectionComponent {

}
