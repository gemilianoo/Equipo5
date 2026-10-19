import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gustavo } from './gustavo';

describe('Gustavo', () => {
  let component: Gustavo;
  let fixture: ComponentFixture<Gustavo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gustavo],
    }).compileComponents();

    fixture = TestBed.createComponent(Gustavo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
