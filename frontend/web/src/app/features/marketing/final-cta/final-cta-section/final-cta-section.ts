import { Component } from '@angular/core';
import {RevealOnScroll} from "../../../../shared/directives/reveal-on-scroll";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [
    RevealOnScroll,
    RouterLink
  ],
  templateUrl: './final-cta-section.html',
  styleUrls: ['./final-cta-section.css'],
})
export class FinalCtaSectionComponent {

}
