import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopToolbar } from './shop-toolbar';

describe('ShopToolbar', () => {
  let component: ShopToolbar;
  let fixture: ComponentFixture<ShopToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
