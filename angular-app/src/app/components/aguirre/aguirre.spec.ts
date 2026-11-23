import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aguirre } from './aguirre';

describe('Aguirre', () => {
  let component: Aguirre;
  let fixture: ComponentFixture<Aguirre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aguirre],
    }).compileComponents();

    fixture = TestBed.createComponent(Aguirre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
