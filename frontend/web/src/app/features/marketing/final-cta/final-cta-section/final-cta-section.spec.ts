import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCtaSection } from './final-cta-section';

describe('FinalCtaSection', () => {
  let component: FinalCtaSection;
  let fixture: ComponentFixture<FinalCtaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalCtaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCtaSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
