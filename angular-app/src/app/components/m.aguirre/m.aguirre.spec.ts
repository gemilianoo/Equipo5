import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAguirre } from './m.aguirre';

describe('MAguirre', () => {
  let component: MAguirre;
  let fixture: ComponentFixture<MAguirre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAguirre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAguirre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
