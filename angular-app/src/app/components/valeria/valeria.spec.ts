import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valeria } from './valeria';

describe('Valeria', () => {
  let component: Valeria;
  let fixture: ComponentFixture<Valeria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valeria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valeria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
