import { Component } from '@angular/core';
import {RevealOnScroll} from "../../../../shared/directives/reveal-on-scroll";

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
    imports: [
        RevealOnScroll
    ],
  templateUrl: './final-cta-section.html',
  styleUrls: ['./final-cta-section.css'],
})
export class FinalCtaSectionComponent {

}
