import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Romina } from './romina';

describe('Romina', () => {
  let component: Romina;
  let fixture: ComponentFixture<Romina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Romina],
    }).compileComponents();

    fixture = TestBed.createComponent(Romina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
