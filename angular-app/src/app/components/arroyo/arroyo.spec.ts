import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Arroyo } from './arroyo';

describe('Arroyo', () => {
  let component: Arroyo;
  let fixture: ComponentFixture<Arroyo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arroyo],
    }).compileComponents();

    fixture = TestBed.createComponent(Arroyo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
