import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3TopBannerComponent } from './h3-top-banner.component';

describe('H3TopBannerComponent', () => {
  let component: H3TopBannerComponent;
  let fixture: ComponentFixture<H3TopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H3TopBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H3TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
