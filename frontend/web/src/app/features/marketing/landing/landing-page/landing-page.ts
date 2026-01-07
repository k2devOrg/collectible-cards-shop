import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../hero/hero-section/hero-section';
import {CategoriesSectionComponent} from '../../categories/categories-section/categories-section';
import {TrustSectionComponent} from '../../trust/trust-section/trust-section';
import {FinalCtaSectionComponent} from '../../final-cta/final-cta-section/final-cta-section';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CategoriesSectionComponent,
    TrustSectionComponent,
    FinalCtaSectionComponent
  ],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css',]
})
export class LandingPageComponent {

}
