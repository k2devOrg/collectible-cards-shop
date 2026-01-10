import { Component } from '@angular/core';
import {RevealOnScroll} from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [
    RevealOnScroll
  ],
  templateUrl: './trust-section.html',
  styleUrls: ['./trust-section.css'],
})
export class TrustSectionComponent {

}
