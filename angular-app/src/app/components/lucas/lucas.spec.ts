import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lucas } from './lucas';

describe('Lucas', () => {
  let component: Lucas;
  let fixture: ComponentFixture<Lucas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lucas],
    }).compileComponents();

    fixture = TestBed.createComponent(Lucas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
