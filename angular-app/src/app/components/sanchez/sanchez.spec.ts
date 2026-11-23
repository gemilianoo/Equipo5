import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sanchez } from './sanchez';

describe('Sanchez', () => {
  let component: Sanchez;
  let fixture: ComponentFixture<Sanchez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sanchez],
    }).compileComponents();

    fixture = TestBed.createComponent(Sanchez);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
