import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3SearchBarComponent } from './h3-search-bar.component';

describe('H3SearchBarComponent', () => {
  let component: H3SearchBarComponent;
  let fixture: ComponentFixture<H3SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H3SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H3SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
