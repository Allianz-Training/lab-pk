import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4ComponentComponent } from './lab4-component.component';

describe('Lab4ComponentComponent', () => {
  let component: Lab4ComponentComponent;
  let fixture: ComponentFixture<Lab4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
